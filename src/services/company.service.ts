import { AxiosResponse } from 'axios'
import { ICompany } from '../types/company.type'
import http from './http.service'

class CompanyDataService {
  async getCompany(): Promise<AxiosResponse<ICompany | null>> {
    const result = await http.get('/db.json')
    const { company } = result.data as { company: ICompany }

    const companyResult = {
      data: company ?? null,
      status: result.status,
      statusText: result.statusText,
      headers: result.headers,
      config: result.config,
    }

    return company !== null
      ? await Promise.resolve(companyResult)
      : await Promise.reject(new Error('Company endpoint not found'))
  }
}

export default new CompanyDataService()
