/* eslint-disable @typescript-eslint/indent */
import { Outlet } from 'react-router'

const ColumnThreePage = (): JSX.Element => {
  return (
    <div className="flex w-full flex-grow flex-col flex-wrap sm:flex-row sm:flex-nowrap">
      <div className="xs:w-2/3 flex-grow lg:w-1/2">
        <Outlet />
      </div>

      <div className="w-fixed xs:w-1/3 flex-shrink flex-grow-0 lg:w-1/4 lg:pl-4">
        THIRD COLUMN INFORMATION
      </div>
    </div>
  )
}

export default ColumnThreePage
