import { AxiosResponse } from 'axios'
import { IProduct } from '@/types/product.type'
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
}

export default new ProductDataService()
