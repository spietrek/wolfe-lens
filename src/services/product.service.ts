import { AxiosResponse } from 'axios'
import { IProduct, IProductItem } from '../types/product.type'
import http from './http.service'

class ProductDataService {
  async getProduct(productId: string): Promise<AxiosResponse<IProduct | null>> {
    const result = await http.get('/db.json')
    const data = result.data as { products: IProduct[] }
    const product = data.products.find(
      (p: IProduct) => p.id === Number(productId),
    )

    const productResult = {
      data: product ?? null,
      status: result.status,
      statusText: result.statusText,
      headers: result.headers,
      config: result.config,
    }

    return product !== null
      ? await Promise.resolve(productResult)
      : await Promise.reject(new Error('Product not found'))
  }

  async getFeatured(): Promise<AxiosResponse<IProductItem[]>> {
    const result = await http.get('/db.json')
    const { products } = result.data as { products: IProduct[] }
    const filteredProducts = products.filter(
      (p: IProduct) => p.featured && p.active && p.category === 'Bikes',
    )
    const featured: IProductItem[] = filteredProducts.map((p: IProduct) => ({
      id: p.id,
      title: p.name,
      subtitle: p.subtitle,
      image: p.featuredImage,
      altText: p.name,
      link: `/bike/${p.id}`,
      sortOrder: p.id,
      active: p.active,
      featured: p.featured,
    }))

    const productsResult = {
      data: featured ?? [],
      status: result.status,
      statusText: result.statusText,
      headers: result.headers,
      config: result.config,
    }

    return featured !== null
      ? await Promise.resolve(productsResult)
      : await Promise.reject(new Error('Featured Products endpoint not found'))
  }

  async getSimilar(
    id: string,
    category: string,
  ): Promise<AxiosResponse<IProductItem[]>> {
    const result = await http.get('/db.json')
    const { products } = result.data as { products: IProduct[] }
    const filteredProducts = products.filter(
      (p: IProduct) =>
        p.id !== Number(id) && p.active && p.category === category,
    )
    const similar: IProductItem[] = filteredProducts.map((p: IProduct) => ({
      id: p.id,
      title: p.name,
      subtitle: p.subtitle,
      image: p.featuredImage,
      altText: p.name,
      link: `/bike/${p.id}`,
      sortOrder: p.id,
      active: p.active,
      featured: p.featured,
    }))

    const productsResult = {
      data: similar ?? [],
      status: result.status,
      statusText: result.statusText,
      headers: result.headers,
      config: result.config,
    }

    return similar !== null
      ? await Promise.resolve(productsResult)
      : await Promise.reject(new Error('Similar Products endpoint not found'))
  }

  async getGear(
    id: string,
    category: string,
  ): Promise<AxiosResponse<IProductItem[]>> {
    const result = await http.get('/db.json')
    const { products } = result.data as { products: IProduct[] }
    const filteredProducts = products.filter(
      (p: IProduct) =>
        p.id !== Number(id) && p.active && p.category === category,
    )
    const similar: IProductItem[] = filteredProducts.map((p: IProduct) => ({
      id: p.id,
      title: p.name,
      subtitle: p.subtitle,
      image: p.featuredImage,
      altText: p.name,
      link: `/gear/${p.id}`,
      sortOrder: p.id,
      active: p.active,
      featured: p.featured,
    }))

    const productsResult = {
      data: similar ?? [],
      status: result.status,
      statusText: result.statusText,
      headers: result.headers,
      config: result.config,
    }

    return similar !== null
      ? await Promise.resolve(productsResult)
      : await Promise.reject(new Error('Product Gear endpoint not found'))
  }

  async getHiking(): Promise<AxiosResponse<IProductItem[]>> {
    const result = await http.get('/db.json')
    const { products } = result.data as { products: IProduct[] }
    const filteredProducts = products.filter(
      (p: IProduct) => p.featured && p.active && p.category === 'Hiking',
    )
    const featured: IProductItem[] = filteredProducts.map((p: IProduct) => ({
      id: p.id,
      title: p.name,
      subtitle: p.subtitle,
      image: p.featuredImage,
      altText: p.name,
      link: `/hiking/${p.id}`,
      sortOrder: p.id,
      active: p.active,
      featured: p.featured,
    }))

    const productsResult = {
      data: featured ?? [],
      status: result.status,
      statusText: result.statusText,
      headers: result.headers,
      config: result.config,
    }

    return featured !== null
      ? await Promise.resolve(productsResult)
      : await Promise.reject(new Error('Hiking Products endpoint not found'))
  }
}

export default new ProductDataService()
