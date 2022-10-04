import { PropsWithChildren, SetStateAction, useState } from 'react'
import {
  ToggleButton,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { IProduct } from '../../types/product.type'
import InsButton from '../atoms/InsButton'
import InsToggleButtonGroup from '../atoms/InsToggleButtonGroup'
import InsTypography from '../atoms/InsTypography'

interface IProps {
  product: IProduct
}

const InsSingleOrder = ({
  product,
}: PropsWithChildren<IProps>): JSX.Element => {
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

  const isValidSubmit = (): boolean => {
    return color?.length > 0 && size?.length > 0 && acquire?.length > 0
  }

  return (
    <>
      <div className="my-6 flex">
        <div>
          <InsTypography level="h6" uppercase>
            <span className="text-sm text-gray-400">Color</span>
          </InsTypography>

          <InsToggleButtonGroup
            size="large"
            value={color}
            exclusive
            onChange={handleColorChange}
          >
            <ToggleButton
              value="black"
              key="black"
              className="h-[42px] w-[42px] !bg-[#000]"
            />

            <ToggleButton
              value="red"
              key="red"
              className="h-[42px] w-[42px] !bg-[#ff0000]"
            />

            <ToggleButton
              value="yellow"
              key="yellow"
              className="h-[42px] w-[42px] !bg-[#f9db24]"
            />
          </InsToggleButtonGroup>
        </div>

        <div className="ml-4">
          <InsTypography level="h6" uppercase>
            <span className="text-sm text-gray-400">Size</span>
          </InsTypography>

          <InsToggleButtonGroup
            size="large"
            value={size}
            exclusive
            onChange={handleSizeChange}
          >
            <ToggleButton
              value="small"
              key="small"
              className="h-[42px] w-[42px]"
            >
              S
            </ToggleButton>
            <ToggleButton
              value="medium"
              key="medium"
              className="h-[42px] w-[42px]"
            >
              M
            </ToggleButton>
            <ToggleButton
              value="large"
              key="large"
              className="h-[42px] w-[42px]"
            >
              L
            </ToggleButton>

            <ToggleButton
              value="extraLarge"
              key="extraLarge"
              className="h-[42px] w-[42px]"
            >
              XL
            </ToggleButton>
          </InsToggleButtonGroup>
        </div>
      </div>

      <div className="mb-6">
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={acquire}
          name="radio-buttons-group"
          onChange={handleAcquireChange}
        >
          <div className="border border-solid border-[#333] p-3">
            <FormControlLabel
              value="shipIt"
              control={<Radio />}
              label="SHIP IT TO ME"
            />
            <InsTypography level="h6" uppercase>
              <span className="ml-8 text-sm text-gray-400">
                Free shiping and returns
              </span>
            </InsTypography>
          </div>
          <div className="border border-t-0  border-solid border-[#333] p-3">
            <FormControlLabel
              value="pickup"
              control={<Radio />}
              label="PICKUP AT DEALER"
            />
            <InsTypography level="h6" uppercase>
              <span className="ml-8 text-sm text-gray-400">
                2 Available at this location
              </span>
              <div>
                <span className="ml-8 mr-2 text-sm font-bold uppercase">
                  Stans Bike Shop
                </span>
                <Link to="/" className="text-sm normal-case underline">
                  Change Location
                </Link>
              </div>
            </InsTypography>
          </div>
        </RadioGroup>
      </div>

      <div>
        <InsButton
          type="submit"
          size="large"
          variant="contained"
          color="primary"
          className="min-w-[250px]"
          disabled={!isValidSubmit()}
        >
          Add to Cart
        </InsButton>
      </div>
    </>
  )
}

export default InsSingleOrder
