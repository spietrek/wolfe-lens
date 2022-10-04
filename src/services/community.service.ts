import { AxiosResponse } from 'axios'
import { ICommunity } from '../types/community.type'
import http from './http.service'

class CommunityDataService {
  async getImages(): Promise<AxiosResponse<ICommunity[]>> {
    const result = await http.get('/db.json')
    const { homeCommunity } = result.data as { homeCommunity: ICommunity[] }

    const communityResult = {
      data: homeCommunity ?? [],
      status: result.status,
      statusText: result.statusText,
      headers: result.headers,
      config: result.config,
    }

    return homeCommunity !== null
      ? await Promise.resolve(communityResult)
      : await Promise.reject(new Error('Community endpoint not found'))
  }
}

export default new CommunityDataService()
