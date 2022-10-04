import { AxiosResponse } from 'axios'
import { ICategory } from '../types/category.type'
import http from './http.service'

class HeaderDataService {
  async getNavLinks(): Promise<AxiosResponse<ICategory[]>> {
    const result = await http.get('/db.json')
    const { headerLinks } = result.data as { headerLinks: ICategory[] }
    const mappedLinks = headerLinks.map((link: ICategory) => {
      return {
        ...link,
        label: link?.title ?? 'No title',
      }
    })

    const headerResult = {
      data: mappedLinks ?? [],
      status: result.status,
      statusText: result.statusText,
      headers: result.headers,
      config: result.config,
    }

    return mappedLinks !== null
      ? await Promise.resolve(headerResult)
      : await Promise.reject(new Error('Header endpoint not found'))
  }
}

export default new HeaderDataService()
