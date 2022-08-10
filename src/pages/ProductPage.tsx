import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useAppSelector, useAppDispatch } from '@/hooks/useReduxHooks'
import { RootState } from '@/store'
import { retrieveProduct } from '@/store/slices/product/productSlice'
import InsProduct from '../components/templates/InsProduct'

const ProductPage = (): JSX.Element => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const product = useAppSelector(
    (state: RootState) => state.storeProduct.product,
  )
  const isLoading = useAppSelector(
    (state: RootState) => state.storeProduct.isLoading,
  )

  useEffect(() => {
    const productId = params?.productId ?? '0'
    void dispatch(retrieveProduct(productId))
    window.scrollTo(0, 0)
  }, [dispatch, params.productId])

  return <InsProduct loading={isLoading} product={product} />
}

export default ProductPage
