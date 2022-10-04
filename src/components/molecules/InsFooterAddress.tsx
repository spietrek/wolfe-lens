import InsTypography from '../atoms/InsTypography'

const InsFooterAddress = (): JSX.Element => {
  return (
    <>
      <InsTypography level="h6" bold uppercase>
        <span className="text-sm">Global HQ</span>
      </InsTypography>
      <div className="mb-4" />
      <InsTypography level="body2">456 Jefferson Ave.</InsTypography>
      <InsTypography level="body2">Louisville, KY</InsTypography>
      <InsTypography level="body2">40202</InsTypography>
      <InsTypography level="body2">Phone: 888.696.4324</InsTypography>
      <InsTypography level="body2">info@wolfe-bikes.com</InsTypography>
    </>
  )
}

export default InsFooterAddress
