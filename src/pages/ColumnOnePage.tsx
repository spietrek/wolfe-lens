import { Outlet } from 'react-router'

const ColumnOnePage = (): JSX.Element => {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  )
}

export default ColumnOnePage
