import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import InsSpinner from '../components/atoms/InsSpinner'
import InsAuth from '../components/organisms/InsAuth'
import { USER_ROLE as UR } from '../constants'
import BasePage from '../pages/BasePage'
import ColumnOnePage from '../pages/ColumnOnePage'
import ColumnThreePage from '../pages/ColumnThreePage'

const HomePage = lazy(() => import('../pages/HomePage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))
const SettingsPage = lazy(() => import('../pages/SettingsPage'))
const UnauthorizedPage = lazy(() => import('../pages/UnauthorizedPage'))

const AppRoutes = (): JSX.Element => {
  return (
    <Suspense fallback={<InsSpinner />}>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route element={<ColumnOnePage />}>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="unauthorized" element={<UnauthorizedPage />} />
            {/* Admin Protected Routes */}
            <Route element={<InsAuth allowedRoles={[UR.Admin]} />}>
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            {/* Admin/User Protected Routes */}
            <Route element={<InsAuth allowedRoles={[UR.Admin, UR.User]} />} />
            {/* Catch all route */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route element={<ColumnThreePage />}>{/* Public Routes */}</Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
