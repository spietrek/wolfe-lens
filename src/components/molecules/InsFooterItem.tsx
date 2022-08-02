import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { IFooterItem } from '@/types/footer.type'
import InsHeading from '../atoms/InsHeading'

interface IProps {
  item: IFooterItem
}

const InsFooterItem = ({ item }: PropsWithChildren<IProps>): JSX.Element => {
  const label = item.label
  const links = item.links ?? []

  return (
    <>
      <InsHeading className="mb-3 text-sm uppercase">{label}</InsHeading>
      {links.map((link, index) => (
        <div key={index} className="mb-1 text-sm">
          <Link to={link.href}>{link.label}</Link>
        </div>
      ))}
    </>
  )
}

export default InsFooterItem
