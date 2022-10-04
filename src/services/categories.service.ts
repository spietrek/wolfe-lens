import { AxiosResponse } from 'axios'
import { ICategory } from '../types/category.type'
import http from './http.service'

class CategoriesDataService {
  async getItems(): Promise<AxiosResponse<ICategory[]>> {
    const result = await http.get('/db.json')
    const { headerLinks } = result.data as { headerLinks: ICategory[] }

    const categoriesResult = {
      data: headerLinks ?? [],
      status: result.status,
      statusText: result.statusText,
      headers: result.headers,
      config: result.config,
    }

    return headerLinks !== null
      ? await Promise.resolve(categoriesResult)
      : await Promise.reject(new Error('Categories endpoint not found'))
  }
}

export default new CategoriesDataService()
