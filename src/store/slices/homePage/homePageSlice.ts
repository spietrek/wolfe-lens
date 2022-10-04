import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { timeout } from '../../../helpers'
import CategoriesDataService from '../../../services/categories.service'
import CommunityDataService from '../../../services/community.service'
import HomeHeroDataService from '../../../services/homeHero.service'
import ProductDataService from '../../../services/product.service'
import { ICategory } from '../../../types/category.type'
import { ICommunity } from '../../../types/community.type'
import { IHeroWithButton } from '../../../types/hero.type'
import { IProductItem } from '../../../types/product.type'

interface HomePageState {
  isError: boolean
  isLoading: boolean
  categories: ICategory[]
  communityImages: ICommunity[]
  featuredProducts: IProductItem[]
  hero: IHeroWithButton | null
}

export const retrieveHomePageData = createAsyncThunk(
  'homePage/retrieve',
  async () => {
    await timeout(500)

    const res = await Promise.all([
      CategoriesDataService.getItems(),
      CommunityDataService.getImages(),
      HomeHeroDataService.getHero(),
      ProductDataService.getFeatured(),
    ])

    const homePageData = {
      categories: res[0].data as unknown as ICategory[],
      communityImages: res[1].data as unknown as ICommunity[],
      hero: res[2].data as unknown as IHeroWithButton | null,
      featuredProducts: res[3].data as unknown as IProductItem[],
    }

    return homePageData
  },
)

const initialState = {
  isError: false,
  isLoading: false,
  categories: [],
  communityImages: [],
  featuredProducts: [],
  hero: null,
} as HomePageState

export const homePageSlice = createSlice({
  name: 'homePageSlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.categories = []
      state.communityImages = []
      state.featuredProducts = []
      state.hero = null
    },
  },

  extraReducers: builder => {
    builder.addCase(retrieveHomePageData.pending, state => {
      state.isError = false
      state.isLoading = true
    })

    builder.addCase(retrieveHomePageData.fulfilled, (state, action) => {
      state.categories = action?.payload?.categories ?? []
      state.communityImages = action?.payload?.communityImages ?? []
      state.featuredProducts = action?.payload?.featuredProducts ?? []
      state.hero = action?.payload?.hero ?? null
      state.isLoading = false
    })

    builder.addCase(retrieveHomePageData.rejected, state => {
      state.isError = true
      state.isLoading = false
    })
  },
})

export const { reset } = homePageSlice.actions

const { reducer } = homePageSlice
export default reducer
