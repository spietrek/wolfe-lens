import { Grid } from '@mui/material'
import { IFooterItem } from '@/types/footer.type'
import InsAppBar from '../molecules/InsAppBar'
import InsFooterAddress from '../molecules/InsFooterAddress'
import InsFooterItem from '../molecules/InsFooterItem'
import InsLogo from '../molecules/InsLogo'

const styles: { [key: string]: React.CSSProperties } = {
  appBar: { marginTop: '120px' },
}

const footerItems: IFooterItem[] = [
  {
    label: 'Shop',
    links: [
      { label: 'Bikes', href: '/' },
      { label: 'Gear', href: '/' },
      { label: 'Parts', href: '/' },
    ],
  },
  {
    label: 'Orders & Returns',
    links: [
      { label: 'Full Bike Assembly', href: '/' },
      { label: 'Shipping & Delivery', href: '/' },
      { label: 'Return Policy', href: '/' },
      { label: 'Affirm Financing', href: '/' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'Click & Mortar', href: '/' },
      { label: 'Terms & Conditions', href: '/' },
      { label: 'Privacy Policy', href: '/' },
      { label: 'Dealers', href: '/' },
      { label: 'Demo Tour', href: '/' },
    ],
  },
  {
    label: 'Support',
    links: [
      { label: 'Register Your Bike', href: '/' },
      { label: 'Warranty Policy', href: '/' },
      { label: 'Get Support', href: '/' },
      { label: 'Tech Details', href: '/' },
      { label: 'Decal Install Instructions', href: '/' },
      { label: 'Bike Archive', href: '/' },
    ],
  },
]

const InsFooter = (): JSX.Element => {
  const colCount = 12 / (footerItems.length + 1)

  return (
    <InsAppBar
      position="static"
      elevation={0}
      component="footer"
      style={styles.appBar}
    >
      <div className="w-full bg-slate-300 p-6 text-center dark:bg-black">
        <InsLogo />
        <Grid container spacing={3} style={{ marginTop: '4px' }}>
          <Grid item xs={12} sm={colCount}>
            <InsFooterAddress />
          </Grid>
          {footerItems.map((item, index) => (
            <Grid key={index} item xs={12} sm={colCount}>
              <InsFooterItem item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </InsAppBar>
  )
}

export default InsFooter
