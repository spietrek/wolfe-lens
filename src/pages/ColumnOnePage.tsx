import { Outlet } from 'react-router'
import InsContentBlock from '../components/atoms/InsContentBlock'

const ColumnOnePage = (): JSX.Element => {
  return (
    <InsContentBlock>
      <Outlet />
    </InsContentBlock>
  )
}

export default ColumnOnePage
