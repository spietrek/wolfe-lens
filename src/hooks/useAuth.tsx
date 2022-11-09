/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, createContext, useContext } from 'react'
import axios from 'axios'
import { USER_ROLE } from '../constants'
import { timeout } from '../helpers'
import AuthDataService from '../services/auth.service'
import { users } from '../stories/data/users'

export interface AuthResponseType {
  success: boolean
  error: string | null
}
interface AuthContextType {
  loading: boolean
  authenticated: boolean
  email: string | null
  roles: USER_ROLE[]
  errorMsg: string
  register: (
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
  ) => Promise<AuthResponseType | undefined>
  login: (
    email: string,
    password: string,
  ) => Promise<AuthResponseType | undefined>
  logout: (callback: VoidFunction) => void
}

const AuthContext = createContext<AuthContextType>(null!)

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [email, setEmail] = useState<string | null>(null)
  const [roles, setRoles] = useState<USER_ROLE[]>([])
  const [errorMsg, setErrorMsg] = useState<string>('')

  const isValidUser = (email: string): boolean => {
    return users.some(user => user.email === email)
  }

  const getUserRoles = (email: string): USER_ROLE[] => {
    return users.find(user => user.email === email)?.roles ?? []
  }

  const register = async (
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
  ): Promise<AuthResponseType | undefined> => {
    let tempErrorMsg = ''
    setLoading(true)
    try {
      const tempUser = {
        userName,
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }

      if (
        password.localeCompare(confirmPassword, 'en', {
          sensitivity: 'case',
        }) !== 0
      ) {
        tempErrorMsg = 'Passwords do not match'
        return { success: false, error: tempErrorMsg }
      }

      await timeout(150)
      const res = await AuthDataService.login(tempUser)
      if (res.status === 200) {
        setEmail(email)
        tempErrorMsg = ''

        return { success: true, error: null }
      } else {
        tempErrorMsg = 'Invalid User'

        return { success: false, error: tempErrorMsg }
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response == null) {
          tempErrorMsg = 'No Server Response'
        } else if (err.response.status === 400) {
          const { data } = err.response
          const { error } = data as { error: string }
          tempErrorMsg = error ?? 'Missing Email or Password'
        } else if (err.response.status === 401) {
          tempErrorMsg = 'Invalid credentials'
        }
      } else {
        tempErrorMsg = 'Unknown Error'
      }

      return { success: false, error: tempErrorMsg }
    } finally {
      setErrorMsg(tempErrorMsg)
      setLoading(false)
    }
  }

  const login = async (
    email: string,
    password: string,
  ): Promise<AuthResponseType | undefined> => {
    let tempErrorMsg = ''
    setLoading(true)

    try {
      const tempUser = {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }

      await timeout(150)
      const res = await AuthDataService.login(tempUser)

      if (isValidUser(email) && res.status === 200) {
        setEmail(email)
        setAuthenticated(true)
        setRoles(getUserRoles(email))
        tempErrorMsg = ''

        return { success: true, error: null }
      } else {
        tempErrorMsg = 'Invalid User'

        return { success: false, error: tempErrorMsg }
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response == null) {
          tempErrorMsg = 'No Server Response'
        } else if (err.response.status === 400) {
          const { data } = err.response
          const { error } = data as { error: string }
          tempErrorMsg = error ?? 'Missing Email or Password'
        } else if (err.response.status === 401) {
          tempErrorMsg = 'Invalid credentials'
        }
      } else {
        tempErrorMsg = 'Unknown Error'
      }

      return { success: false, error: tempErrorMsg }
    } finally {
      setErrorMsg(tempErrorMsg)
      setLoading(false)
    }
  }

  const logout = (callback: VoidFunction): void => {
    setEmail(null)
    setAuthenticated(false)
    setRoles([])
    setErrorMsg('')
    callback()
  }

  const value = {
    loading,
    authenticated,
    email,
    roles,
    errorMsg,
    register,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext)
}
