import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from '@/types/product.type'
import { timeout } from '../../../helpers'
import ProductDataService from '../../../services/product.service'

interface ProductState {
  isError: boolean
  isLoading: boolean
  product: IProduct | null
}

export const retrieveProduct = createAsyncThunk(
  'product/retrieve',
  async (productId: string) => {
    await timeout(1500)
    const res = await ProductDataService.getProduct(productId)
    return res.data
  },
)

const initialState = {
  isError: false,
  isLoading: false,
  product: null,
} as ProductState

export const productSlice = createSlice({
  name: 'productSlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.product = null
    },
  },

  extraReducers: builder => {
    builder.addCase(retrieveProduct.pending, state => {
      state.isError = false
      state.isLoading = true
    })

    builder.addCase(retrieveProduct.fulfilled, (state, action) => {
      state.product = action.payload
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
