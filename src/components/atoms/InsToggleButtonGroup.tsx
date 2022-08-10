import { styled, ToggleButtonGroup } from '@mui/material'

const InsToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
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

export default InsToggleButtonGroup
