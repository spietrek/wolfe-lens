import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { formatCurrency, timeout } from '../../../helpers'
import ProductDataService from '../../../services/product.service'
import { IProduct, IProductItem } from '../../../types/product.type'

interface ProductState {
  isError: boolean
  isLoading: boolean
  product: IProduct | null
  similarProducts: IProductItem[]
  hikingProducts: IProductItem[]
  gear: IProductItem[]
}

export const retrieveProduct = createAsyncThunk(
  'product/retrieve',
  async (productId: string) => {
    await timeout(500)
    const res = await Promise.all([
      ProductDataService.getProduct(productId),
      ProductDataService.getSimilar(productId, 'Bikes'),
      ProductDataService.getGear(productId, 'Parts'),
      ProductDataService.getHiking(),
    ])

    const productData = {
      product: res[0].data as unknown as IProduct,
      similarProducts: res[1].data as unknown as IProductItem[],
      gear: res[2].data as unknown as IProductItem[],
      hikingProducts: res[3].data as unknown as IProductItem[],
    }

    return productData
  },
)

const initialState = {
  isError: false,
  isLoading: false,
  product: null,
  similarProducts: [],
  gear: [],
  hikingProducts: [],
} as ProductState

export const productSlice = createSlice({
  name: 'productSlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.product = null
      state.similarProducts = []
      state.gear = []
      state.hikingProducts = []
    },
  },

  extraReducers: builder => {
    builder.addCase(retrieveProduct.pending, state => {
      state.isError = false
      state.isLoading = true
    })

    builder.addCase(retrieveProduct.fulfilled, (state, action) => {
      const product = action?.payload?.product ?? null
      if (product !== null) {
        const formattedPrice = formatCurrency(product?.price ?? 0)
        product.formattedPrice = formattedPrice
        const formattedAutoRenewPrice = formatCurrency(
          product?.autoRenewPrice ?? 0,
        )
        product.formattedAutoRenewPrice = formattedAutoRenewPrice
      }
      state.product = product
      state.similarProducts = action?.payload?.similarProducts ?? []
      state.gear = action?.payload?.gear ?? []
      state.hikingProducts = action?.payload?.hikingProducts ?? []
      state.isLoading = false
    })

    builder.addCase(retrieveProduct.rejected, state => {
      state.isError = true
      state.isLoading = false
    })
  },
})

export const { reset } = productSlice.actions

const { reducer } = productSlice
export default reducer
