import { PropsWithChildren } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  AccordionSummaryProps,
  styled,
  Typography,
} from '@mui/material'

const StyledAccordion = styled(Accordion)<AccordionProps>(() => ({
  borderTop: '1px solid #fff',
  borderBottom: '1px solid #fff',
  backgroundColor: 'inherit',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
})) as typeof Accordion

const StyledAccordionSummary = styled(AccordionSummary)<AccordionSummaryProps>(
  () => ({
    padding: '8px 0',
    '& .MuiTypography-body1': {
      fontSize: '22px',
      textTransform: 'uppercase',
    },
  }),
) as typeof AccordionSummary

interface IProps {
  title: string
  children?: React.ReactNode
}

const InsAccordion = ({
  title,
  children,
}: PropsWithChildren<IProps>): JSX.Element => (
  <StyledAccordion key={title} disableGutters elevation={0} square>
    <StyledAccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography>{title}</Typography>
    </StyledAccordionSummary>
    <AccordionDetails>
      <Typography>{children}</Typography>
    </AccordionDetails>
  </StyledAccordion>
)

export default InsAccordion
