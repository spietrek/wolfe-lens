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
  const formBg = darkMode ? '#000' : '#fff'

  const handleSubmit = (): void => {
    console.log(email, firstName, approve)
    setEmail('')
    setFirstName('')
    setApprove(false)
  }

  return (
    <div className="md:p0 mt-[80px] sm:px-4 md:h-full">
      <div className="md:relative">
        <InsImage
          src="/assets/images/mtb-signup-form.png"
          alt="Signup Form"
          className="lg:relative lg:w-2/3"
        />

        <div className="md:absolute md:top-1/2 md:bottom-0 md:right-0 md:z-10 md:h-[310px] md:w-2/3 md:translate-y-[-50%] md:translate-x-0 md:transform">
          <div style={{ backgroundColor: formBg }} className="p-6">
            <InsHeading className="text-3xl font-bold uppercase">
              Sign up for the Wolfe Up
            </InsHeading>
            <InsHeading className="text-xl">
              The Weekly Wolfe Newsletter
            </InsHeading>

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
                  <InsBodyText className="text-sm">
                    Yes! Send me emails with news from Wolfe Bikes
                  </InsBodyText>
                }
              />

              <InsBodyText className="text-sm">
                We won&apos;t spam you, and we won&apos;t sell your info. Your
                may unsubscribe at any time. By submitting, you consent to allow
                Wolfe Bikes to store and process your personal information to
                provide you the content requested.
              </InsBodyText>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsSignupForm
