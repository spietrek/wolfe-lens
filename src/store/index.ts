import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/product/productSlice'

const reducers = {
  storeProduct: productReducer,
}

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
