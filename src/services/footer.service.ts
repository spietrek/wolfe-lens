import { AxiosResponse } from 'axios'
import { IFooterNav } from '../types/footer.type'
import http from './http.service'

class FooterDataService {
  async getNavLinks(): Promise<AxiosResponse<IFooterNav[]>> {
    const result = await http.get('/db.json')
    const { footerItems } = result.data as { footerItems: IFooterNav[] }

    const footerResult = {
      data: footerItems ?? [],
      status: result.status,
      statusText: result.statusText,
      headers: result.headers,
      config: result.config,
    }

    return footerItems !== null
      ? await Promise.resolve(footerResult)
      : await Promise.reject(new Error('Footer endpoint not found'))
  }
}

export default new FooterDataService()
