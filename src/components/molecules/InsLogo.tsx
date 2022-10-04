import { PropsWithChildren } from 'react'

interface IProps {
  companyTitle: string
}

const InsLogo = ({ companyTitle }: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <span className="mt-[-10px] block font-['Permanent_Marker'] text-[32px] italic">
      {companyTitle}
    </span>
  )
}

export default InsLogo
