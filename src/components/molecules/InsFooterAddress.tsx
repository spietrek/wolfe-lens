import InsBodyText from '../atoms/InsBodyText'
import InsHeading from '../atoms/InsHeading'

const InsFooterAddress = (): JSX.Element => {
  return (
    <>
      <InsHeading className="mb-3 text-sm uppercase">Global HQ</InsHeading>
      <InsBodyText className="mb-1 text-sm">456 Jefferson Ave.</InsBodyText>
      <InsBodyText className="mb-1 text-sm">Louisville, KY</InsBodyText>
      <InsBodyText className="mb-4 text-sm">40202</InsBodyText>
      <InsBodyText className="mb-1 text-sm">Phone: 888.696.4324</InsBodyText>
      <InsBodyText className="mb-1 text-sm">info@wolfe-bikes.com</InsBodyText>
    </>
  )
}

export default InsFooterAddress
