/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios'
import http from './http.service'

interface UserProps {
  email: string
  password?: string
}

class AuthDataService {
  async register({ email, password }: UserProps): Promise<AxiosResponse> {
    return await http.post('https://reqres.in/api/register', {
      email,
      password,
    })
  }

  async login({ email, password }: UserProps): Promise<AxiosResponse> {
    return await http.post('https://reqres.in/api/login', {
      email,
      password,
    })
  }

  async loginFail({ email }: UserProps): Promise<AxiosResponse> {
    return await http.post('https://reqres.in/api/login', {
      email,
    })
  }
}

export default new AuthDataService()
