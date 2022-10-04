import { useState } from 'react'
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from '@mui/material'
import { useDarkMode } from '../../providers/withThemeProvider'
import InsImage from '../atoms/InsImage'
import InsTypography from '../atoms/InsTypography'

const InsSignupForm = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [approve, setApprove] = useState(false)
  const { darkMode } = useDarkMode()
  const formBg = darkMode ? '#000' : '#fff'

  const handleSubmit = (): void => {
    console.log(email, firstName, approve)
    setEmail('')
    setFirstName('')
    setApprove(false)
  }

  return (
    <div className="md:p0 sm:px-4 md:h-full">
      <div className="md:relative">
        <div className="lg:relative lg:w-2/3">
          <InsImage
            src="/assets/images/mtb-signup-form.webp"
            alt="Signup Form"
          />
        </div>

        <div className="md:absolute md:top-1/2 md:bottom-0 md:right-0 md:z-10 md:h-[310px] md:w-2/3 md:translate-y-[-50%] md:translate-x-0 md:transform">
          <div style={{ backgroundColor: formBg }} className="p-6">
            <InsTypography level="h3" bold uppercase>
              Sign up for the Wolfe Up
            </InsTypography>
            <InsTypography level="h5">
              The Weekly Wolfe Newsletter
            </InsTypography>

            <form>
              <Grid className="mt-1" container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    required
                    fullWidth
                    label="First Name"
                    autoComplete="off"
                    size="small"
                    variant="outlined"
                    color="primary"
                    onChange={e => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="email"
                    name="email"
                    value={email}
                    required
                    fullWidth
                    label="Email Address"
                    type="email"
                    autoComplete="off"
                    size="small"
                    variant="outlined"
                    color="primary"
                    onChange={e => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    type="submit"
                    size="medium"
                    variant="contained"
                    color="primary"
                    disabled={
                      email.length < 1 || firstName.length < 1 || !approve
                    }
                    className="w-full"
                    onClick={handleSubmit}
                  >
                    Sign Me Up
                  </Button>
                </Grid>
              </Grid>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={approve}
                    size="small"
                    onChange={e => setApprove(e.target.checked)}
                  />
                }
                label={
                  <InsTypography level="body2">
                    Yes! Send me emails with news from Wolfe Bikes
                  </InsTypography>
                }
              />

              <InsTypography level="body2">
                We won&apos;t spam you, and we won&apos;t sell your info. Your
                may unsubscribe at any time. By submitting, you consent to allow
                Wolfe Bikes to store and process your personal information to
                provide you the content requested.
              </InsTypography>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsSignupForm
