import { useState } from 'react'
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from '@mui/material'
import { useDarkMode } from '../../providers/withThemeProvider'
import InsBodyText from '../atoms/InsBodyText'
import InsHeading from '../atoms/InsHeading'
import InsImage from '../atoms/InsImage'

const InsSignupForm = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [approve, setApprove] = useState(false)
  const { darkMode } = useDarkMode()

  const handleSubmit = (): void => {
    console.log(email, firstName, approve)
    setEmail('')
    setFirstName('')
    setApprove(false)
  }

  const bgColor = darkMode ? '#000' : '#cbd5e1'

  return (
    <Grid container style={{ margin: '80px 0', backgroundColor: `${bgColor}` }}>
      <Grid item xs={12} md={6}>
        <div className="p-8">
          <InsImage
            src="/assets/images/signup-form-mtb.jpg"
            alt="Signup Form"
          />
        </div>
      </Grid>

      <Grid item xs={12} md={6}>
        <div className="p-8">
          <InsHeading className="mb-4 text-4xl font-bold uppercase">
            Send It!
          </InsHeading>
          <InsHeading className="text-4xl font-bold">
            Sign up for The Wolfe Up - the weekly Wolfe newsletter here!
          </InsHeading>

          <form>
            <div className="my-4 flex">
              <div className="mr-2 flex-1">
                <TextField
                  id="email"
                  name="email"
                  value={email}
                  required
                  fullWidth
                  label="Email Address"
                  type="email"
                  autoComplete="email"
                  variant="filled"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="ml-2 flex-1">
                <TextField
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  required
                  fullWidth
                  label="First Name"
                  variant="filled"
                  onChange={e => setFirstName(e.target.value)}
                />
              </div>
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  checked={approve}
                  onChange={e => setApprove(e.target.checked)}
                />
              }
              label="Yes! Send me emails with news from Wolfe Bikes"
            />

            <InsBodyText className="my-4">
              We won&apos;t spam you, and we won&apos;t sell your info. Your may
              unsubscribe at any time.
            </InsBodyText>

            <InsBodyText>
              By clicking below, you consent to allow Wolfe Bikes to store and
              process your personal information to provide you the content
              requested.
            </InsBodyText>

            <div className="mt-8">
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                style={{ minWidth: '250px' }}
                disabled={email.length < 1 || firstName.length < 1 || !approve}
                onClick={handleSubmit}
              >
                Sign Me Up
              </Button>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default InsSignupForm
