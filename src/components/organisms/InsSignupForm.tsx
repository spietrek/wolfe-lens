import { useState } from 'react'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import InsBodyText from '../atoms/InsBodyText'
import InsHeading from '../atoms/InsHeading'
import InsImage from '../atoms/InsImage'

const InsSignupForm = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [approve, setApprove] = useState(false)

  const handleSubmit = (): void => {
    console.log(email, firstName, approve)
    setEmail('')
    setFirstName('')
    setApprove(false)
  }

  return (
    <div className="md:p0 xs:px-4 mt-[150px] md:h-full">
      <div className="md:relative">
        <InsImage
          src="/assets/images/mtb-signup-form.png"
          alt="Signup Form"
          className="lg:relative lg:w-2/3"
        />

        <div className="md:absolute md:top-1/2 md:bottom-0 md:right-0 md:z-10 md:h-[280px] md:w-2/3 md:translate-y-[-50%] md:translate-x-0 md:transform">
          <div className="bg-white p-6 dark:bg-black">
            <InsHeading className="text-3xl font-bold uppercase">
              Sign up for the Wolfe Up
            </InsHeading>
            <InsHeading className="text-xl">
              The Weekly Wolfe Newsletter
            </InsHeading>

            <form>
              <div className="mt-4 mb-2 flex">
                <div className="mr-2 flex-1">
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
                </div>
                <div className="mr-2 flex-1">
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
                </div>
                <div className="ml-2 flex-1">
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
                </div>
              </div>
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
