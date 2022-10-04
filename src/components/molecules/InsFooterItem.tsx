import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { IFooterNav } from '../../types/footer.type'
import InsTypography from '../atoms/InsTypography'

interface IProps {
  item: IFooterNav
}

const InsFooterItem = ({ item }: PropsWithChildren<IProps>): JSX.Element => {
  const title = item.title
  const links = item.links ?? []

  return (
    <>
      <InsTypography level="h6" bold uppercase>
        <span className="text-sm">{title}</span>
      </InsTypography>
      <div className="mb-4" />
      {links.map((link, index) => (
        <InsTypography key={index} level="body2">
          <Link to={link.link}>{link.label}</Link>
        </InsTypography>
      ))}
    </>
  )
}

export default InsFooterItem
