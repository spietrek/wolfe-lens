import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { timeout } from '../../../helpers'
import CompanyDataService from '../../../services/company.service'
import FooterDataService from '../../../services/footer.service'
import HeaderDataService from '../../../services/header.service'
import { ICategory } from '../../../types/category.type'
import { ICompany } from '../../../types/company.type'
import { IFooterNav } from '../../../types/footer.type'
import { RootState } from '../../index'

interface BasePageState {
  isError: boolean
  isLoading: boolean
  company: ICompany | null
  headerNavLinks: ICategory[]
  footerNavLinks: IFooterNav[]
}

export const retrieveBasePageData = createAsyncThunk(
  'basePage/retrieve',
  async () => {
    await timeout(200)

    const res = await Promise.all([
      CompanyDataService.getCompany(),
      HeaderDataService.getNavLinks(),
      FooterDataService.getNavLinks(),
    ])

    const basePageData = {
      company: res[0].data as unknown as ICompany,
      headerNavLinks: res[1].data as unknown as ICategory[],
      footerNavLinks: res[2].data as unknown as IFooterNav[],
    }

    return basePageData
  },
)

const initialState = {
  isError: false,
  isLoading: false,
  company: null,
  headerNavLinks: [],
  footerNavLinks: [],
} as BasePageState

export const basePageSlice = createSlice({
  name: 'basePageSlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.company = null
      state.headerNavLinks = []
      state.footerNavLinks = []
    },
  },

  extraReducers: builder => {
    builder.addCase(retrieveBasePageData.pending, state => {
      state.isError = false
      state.isLoading = true
    })

    builder.addCase(retrieveBasePageData.fulfilled, (state, action) => {
      state.company = action?.payload?.company ?? null
      state.headerNavLinks = action?.payload?.headerNavLinks ?? []
      state.footerNavLinks = action?.payload?.footerNavLinks ?? []
      state.isLoading = false
    })

    builder.addCase(retrieveBasePageData.rejected, state => {
      state.isError = true
      state.isLoading = false
    })
  },
})

export const { reset } = basePageSlice.actions

const selectCompany = (state: RootState): ICompany | null =>
  state.storeBasePage.company

export const companyTitleSelector = createSelector([selectCompany], company => {
  return company?.name ?? ''
})

const { reducer } = basePageSlice
export default reducer
