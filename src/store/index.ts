import { configureStore } from '@reduxjs/toolkit'
import basePageReducer from './slices/basePage/basePageSlice'
import homePageReducer from './slices/homePage/homePageSlice'
import productReducer from './slices/product/productSlice'

const reducers = {
  storeProduct: productReducer,
  storeBasePage: basePageReducer,
  storeHomePage: homePageReducer,
}

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
