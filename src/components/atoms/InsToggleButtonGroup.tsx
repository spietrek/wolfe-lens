import { styled, ToggleButtonGroup } from '@mui/material'

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

interface IProps {
  size: 'small' | 'medium' | 'large'
  value: string
  onChange: (event: React.MouseEvent<HTMLElement>, nextView: string) => void
  children: React.ReactNode
}

const InsToggleButtonGroup = ({
  size = 'large',
  value,
  onChange,
  children,
}: IProps): JSX.Element => {
  return (
    <StyledToggleButtonGroup
      size={size}
      value={value}
      exclusive
      onChange={onChange}
    >
      {children}
    </StyledToggleButtonGroup>
  )
}

export default InsToggleButtonGroup
