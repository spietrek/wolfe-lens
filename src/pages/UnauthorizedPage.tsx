import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const UnauthorizedPage = (): JSX.Element => {
  const navigate = useNavigate()
  const goBack = (): void => navigate(-1)

  return (
    <div className="w-full">
      <h1>UNAUTHORIZED</h1>
      <br />
      <p>You do not have access to the requested page.</p>
      <div>
        <Button onClick={goBack}>Go Back</Button>
      </div>
    </div>
  )
}

export default UnauthorizedPage
