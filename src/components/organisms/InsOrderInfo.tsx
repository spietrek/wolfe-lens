import { PropsWithChildren, SetStateAction, useState } from 'react'
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  ToggleButton,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { IProduct } from '@/types/product.type'
import InsButton from '../atoms/InsButton'
import InsHeading from '../atoms/InsHeading'
import InsToggleButtonGroup from '../atoms/InsToggleButtonGroup'

interface IProps {
  product: IProduct
}

const InsOrderInfo = ({ product }: PropsWithChildren<IProps>): JSX.Element => {
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
    return color.length > 0 && size.length > 0 && acquire.length > 0
  }

  return (
    <div className="mt-6">
      <div className="flex">
        <InsHeading className="flex-1 text-2xl font-bold uppercase">
          {product.name}
        </InsHeading>
        <InsHeading className="w-[80px] text-right text-2xl font-bold uppercase">
          {product.formattedPrice}
        </InsHeading>
      </div>

      <InsHeading className="text-md text-gray-400">
        {product.subtitle}
      </InsHeading>

      <div className="my-6 flex">
        <div>
          <InsHeading className="mb-2 text-sm uppercase text-gray-400">
            Color
          </InsHeading>

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
          <InsHeading className="mb-2 text-sm uppercase text-gray-400">
            Size
          </InsHeading>

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
                <Link to="/" className="normal-case underline">
                  Change Location
                </Link>
              </div>
            </InsHeading>
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
    </div>
  )
}

export default InsOrderInfo
