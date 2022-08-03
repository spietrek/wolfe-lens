import { SetStateAction, useState } from 'react'
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import { Link } from 'react-router-dom'
import InsHeading from '../atoms/InsHeading'

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    marginRight: theme.spacing(1),
    border: '1px solid #333',
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
      borderLeft: '1px solid #333',
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
    '&.Mui-selected': {
      backgroundColor: 'inherit',
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
}))

const InsOrderInfo = (): JSX.Element => {
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const [acquire, setAcquire] = useState('shipIt')

  const handleColorChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string,
  ): void => {
    setColor(nextView)
  }

  const handleSizeChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string,
  ): void => {
    setSize(nextView)
  }

  const handleAcquireChange = (event: {
    target: { value: SetStateAction<string> }
  }): void => {
    setAcquire(event.target.value)
  }

  return (
    <div className="mt-6">
      <div className="flex">
        <InsHeading className="flex-1 text-2xl font-bold uppercase">
          Slayer
        </InsHeading>
        <InsHeading className="w-[150px] text-right text-2xl font-bold uppercase">
          $7299.00
        </InsHeading>
      </div>

      <InsHeading className="text-md text-gray-400">
        29 Carbon - 140mm
      </InsHeading>

      <div className="my-6 flex">
        <div>
          <InsHeading className="mb-2 text-sm uppercase text-gray-400">
            Color
          </InsHeading>

          <StyledToggleButtonGroup
            size="large"
            value={color}
            exclusive
            onChange={handleColorChange}
          >
            <ToggleButton
              value="black"
              key="black"
              style={{
                height: '42px',
                width: '42px',
                backgroundColor: '#000',
                color: '#ccc',
              }}
            />

            <ToggleButton
              value="red"
              key="red"
              style={{
                height: '42px',
                width: '42px',
                backgroundColor: '#ff0000',
                color: '#ccc',
              }}
            />

            <ToggleButton
              value="yellow"
              key="yellow"
              style={{
                height: '42px',
                width: '42px',
                backgroundColor: '#f9db24',
                color: '#ccc',
              }}
            />
          </StyledToggleButtonGroup>
        </div>
        <div className="ml-4">
          <InsHeading className="mb-2 text-sm uppercase text-gray-400">
            Size
          </InsHeading>

          <StyledToggleButtonGroup
            size="large"
            value={size}
            exclusive
            onChange={handleSizeChange}
          >
            <ToggleButton
              value="small"
              key="small"
              style={{ height: '42px', width: '42px' }}
            >
              S
            </ToggleButton>
            <ToggleButton
              value="medium"
              key="medium"
              style={{ height: '42px', width: '42px' }}
            >
              M
            </ToggleButton>
            <ToggleButton
              value="large"
              key="large"
              style={{ height: '42px', width: '42px' }}
            >
              L
            </ToggleButton>

            <ToggleButton
              value="extraLarge"
              key="extraLarge"
              style={{ height: '42px', width: '42px' }}
            >
              XL
            </ToggleButton>
          </StyledToggleButtonGroup>
        </div>
      </div>

      <div className="mb-6">
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={acquire}
          name="radio-buttons-group"
          onChange={handleAcquireChange}
        >
          <div className="border border-[#333] p-2">
            <FormControlLabel
              value="shipIt"
              control={<Radio />}
              label="SHIP IT TO ME"
            />
            <InsHeading className="ml-8 text-xs uppercase text-gray-400">
              Free shiping and returns
            </InsHeading>
          </div>
          <div className="border border-t-0 border-[#333] p-2">
            <FormControlLabel
              value="pickup"
              control={<Radio />}
              label="PICKUP AT DEALER"
            />
            <InsHeading className="ml-8 text-xs uppercase text-gray-400">
              2 available at this location
              <div>
                <span className="mr-2 font-bold uppercase">
                  Stans Bike Shop
                </span>
                <Link to="/" style={{ textDecoration: 'underline' }}>
                  Change Location
                </Link>
              </div>
            </InsHeading>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Button
          type="submit"
          size="large"
          variant="contained"
          color="primary"
          style={{ minWidth: '250px' }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default InsOrderInfo
