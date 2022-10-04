import { AxiosResponse } from 'axios'
import { IHeroWithButton } from '../types/hero.type'
import http from './http.service'

class HomeHeroDataService {
  async getHero(): Promise<AxiosResponse<IHeroWithButton | null>> {
    const result = await http.get('/db.json')
    const { heroItems } = result.data as { heroItems: IHeroWithButton[] }
    const hero = heroItems.find((h: IHeroWithButton) => h.active)
    const homeHeroResult = {
      data: hero ?? null,
      status: result.status,
      statusText: result.statusText,
      headers: result.headers,
      config: result.config,
    }

    return hero !== null
      ? await Promise.resolve(homeHeroResult)
      : await Promise.reject(new Error('Home Hero endpoint not found'))
  }
}

export default new HomeHeroDataService()
