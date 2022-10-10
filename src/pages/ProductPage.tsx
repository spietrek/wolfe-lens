import { useEffect } from 'react'
import { useParams } from 'react-router'
import InsProduct from '../components/templates/InsProduct'
import { useAppSelector, useAppDispatch } from '../hooks/useReduxHooks'
import { RootState } from '../store'
import { retrieveProduct } from '../store/slices/product/productSlice'

const ProductPage = (): JSX.Element => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const { isLoading, product, similarProducts, gear, hikingProducts } =
    useAppSelector((state: RootState) => state.storeProduct)

  useEffect(() => {
    const productId = params?.productId ?? '0'
    void dispatch(retrieveProduct(productId))
    window.scrollTo(0, 0)
  }, [dispatch, params.productId])

  return (
    <InsProduct
      loading={isLoading}
      product={product}
      similarProducts={similarProducts}
      gear={gear}
      hikingProducts={hikingProducts}
    />
  )
}

export default ProductPage
