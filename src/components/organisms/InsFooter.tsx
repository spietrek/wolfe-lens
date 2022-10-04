import { PropsWithChildren } from 'react'
import { Grid } from '@mui/material'
import { IFooterNav } from '../../types/footer.type'
import InsAppBar from '../molecules/InsAppBar'
import InsFooterAddress from '../molecules/InsFooterAddress'
import InsFooterItem from '../molecules/InsFooterItem'
import InsLogo from '../molecules/InsLogo'

interface IProps {
  companyTitle: string
  footerNavLinks: IFooterNav[]
}

const InsFooter = ({
  companyTitle,
  footerNavLinks,
}: PropsWithChildren<IProps>): JSX.Element => {
  const colCount = 12 / (footerNavLinks.length + 1)

  return (
    <InsAppBar position="static" elevation={0} component="footer">
      <div className="w-full bg-black p-6 text-center text-white">
        <InsLogo companyTitle={companyTitle} />
        <Grid container spacing={3} className="mt-[4px]">
          <Grid item xs={12} md={colCount}>
            <InsFooterAddress />
          </Grid>
          {footerNavLinks.map((item: IFooterNav, index) => (
            <Grid key={index} item xs={12} md={colCount}>
              <InsFooterItem item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </InsAppBar>
  )
}

export default InsFooter
