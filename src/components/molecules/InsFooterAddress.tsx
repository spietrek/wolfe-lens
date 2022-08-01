import InsBodyText from '../atoms/InsBodyText'
import InsHeading from '../atoms/InsHeading'

const InsFooterAddress = (): JSX.Element => {
  return (
    <>
      <InsHeading className="mb-3 text-xs uppercase">Global HQ</InsHeading>
      <InsBodyText className="mb-1 text-xs">456 Jefferson Ave.</InsBodyText>
      <InsBodyText className="mb-1 text-xs">Louisville, KY</InsBodyText>
      <InsBodyText className="mb-4 text-xs">40202</InsBodyText>
      <InsBodyText className="mb-1 text-xs">Phone: 888.696.4324</InsBodyText>
      <InsBodyText className="mb-1 text-xs">info@wolfe-bikes.com</InsBodyText>
    </>
  )
}

export default InsFooterAddress
