import { PropsWithChildren, useId, useState } from 'react'
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  ToggleButton,
} from '@mui/material'
import { IProduct } from '../../types/product.type'
import InsButton from '../atoms/InsButton'
import InsToggleButtonGroup from '../atoms/InsToggleButtonGroup'
import InsTypography from '../atoms/InsTypography'

interface IProps {
  product: IProduct
}

const InsRecurringOrder = ({
  product,
}: PropsWithChildren<IProps>): JSX.Element => {
  const qtySelectId = useId()
  const [orderType, setOrderType] = useState('1')
  const [qty, setQty] = useState('1')

  const handleOrderChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string,
  ): void => {
    setOrderType(nextView)
  }

  const handleQtyChange = (event: SelectChangeEvent): void => {
    setQty(event.target.value)
  }

  return (
    <>
      <InsTypography level="h6" uppercase>
        <span className="text-sm text-gray-400">Buying Options</span>
      </InsTypography>

      <InsToggleButtonGroup
        value={orderType}
        fullWidth
        exclusive
        onChange={handleOrderChange}
      >
        <ToggleButton value="1" key="black" className="h-[100px] w-1/2">
          <InsTypography level="h6">
            <>
              <div>
                <span className="text-xs">One Time Purchase</span>
              </div>
              <div>
                <span>{product.formattedPrice}</span>
              </div>
            </>
          </InsTypography>
        </ToggleButton>

        <ToggleButton value="2" key="red" className="h-[100px] w-1/2">
          <InsTypography level="h6">
            <>
              <div>
                <span className="text-xs">
                  Auto Delivery Every {product.recurrence} Months
                </span>
              </div>
              <div>
                <span>{product.formattedAutoRenewPrice}</span>
              </div>
              <div>
                <span className="text-xs">Save 10% + Free Shipping</span>
              </div>
            </>
          </InsTypography>
        </ToggleButton>
      </InsToggleButtonGroup>

      <div className="mt-4" />

      <InsTypography level="h6" uppercase>
        <span className="text-sm text-gray-400">Qty</span>
      </InsTypography>

      <FormControl>
        <Select
          displayEmpty
          labelId={`${qtySelectId}-label`}
          id={qtySelectId}
          value={qty}
          input={<OutlinedInput />}
          inputProps={{ 'aria-label': 'Select quantity' }}
          onChange={handleQtyChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
        </Select>
      </FormControl>

      <div className="mt-4">
        <InsButton
          type="submit"
          size="large"
          variant="contained"
          color="primary"
          className="min-w-[250px]"
          // disabled={!isValidSubmit()}
        >
          Add to Cart
        </InsButton>
      </div>
    </>
  )
}

export default InsRecurringOrder
