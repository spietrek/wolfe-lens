import { useEffect } from 'react'
import InsHome from '../components/templates/InsHome'
import { useAppDispatch, useAppSelector } from '../hooks/useReduxHooks'
import { RootState } from '../store'
import { retrieveHomePageData } from '../store/slices/homePage/homePageSlice'

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const { isLoading, categories, communityImages, featuredProducts, hero } =
    useAppSelector((state: RootState) => state.storeHomePage)

  useEffect(() => {
    void dispatch(retrieveHomePageData())
    window.scrollTo(0, 0)
  }, [dispatch])

  return (
    <InsHome
      loading={isLoading}
      categories={categories}
      communityImages={communityImages}
      featuredProducts={featuredProducts}
      hero={hero}
    />
  )
}

export default HomePage
