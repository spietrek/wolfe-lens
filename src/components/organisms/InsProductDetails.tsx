import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  AccordionSummaryProps,
  Grid,
  styled,
  Typography,
} from '@mui/material'
import InsBodyText from '../atoms/InsBodyText'
import InsHeading from '../atoms/InsHeading'

const StyledAccordion = styled(Accordion)<AccordionProps>(({ theme }) => ({
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
  ({ theme }) => ({
    padding: '8px 0',
    '& .MuiTypography-body1': {
      fontSize: '22px',
      textTransform: 'uppercase',
    },
  }),
) as typeof AccordionSummary

const InsProductDetails = (): JSX.Element => {
  return (
    <Grid container style={{ margin: '40px 0' }}>
      <Grid item xs={12} sm={6}>
        <div className="mr-8">
          <InsHeading className="text-6xl font-bold uppercase">
            Climb. Descend. Smile. Repeat.
          </InsHeading>

          <InsBodyText className="mt-6 text-base">
            The quiet Quiver Killer strikes again. The Slayer is our 140mm
            29&ldquo; big-wheeled trail bike featuring a steeper 77° seat angle
            and the best attributes from both its Following and Wreckoning
            brothers. Still, the Slayer stands on its own, with an increased
            reach that benefits both climbing and descending, a fierce DH
            capability, an Enduro heart, and diabolical cornering powers. Quiet,
            stiff, fast and poppy-as-hell, the Offering sacrafices nothing but
            givesn you God-like powers. All hail, the Dark Lord of singletrack.
          </InsBodyText>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="ml-8">
          <InsHeading className="text-sm font-bold uppercase">
            Product Info
          </InsHeading>

          <StyledAccordion
            style={{ marginTop: '24px' }}
            disableGutters
            elevation={0}
            square
          >
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Geometry</Typography>
            </StyledAccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion disableGutters elevation={0} square>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Fit / Sizing</Typography>
            </StyledAccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion disableGutters elevation={0} square>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography>Specifications</Typography>
            </StyledAccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
          <StyledAccordion disableGutters elevation={0} square>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography>Faq</Typography>
            </StyledAccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        </div>
      </Grid>
    </Grid>
  )
}

export default InsProductDetails
