/* eslint-disable @typescript-eslint/no-unnecessary-type-arguments */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
