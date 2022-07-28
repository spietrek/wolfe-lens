import InsBodyText from '../atoms/InsBodyText'
import InsAppBar from '../molecules/InsAppBar'

const InsFooter = (): JSX.Element => {
  return (
    <InsAppBar
      position="static"
      elevation={0}
      component="footer"
      style={{ marginTop: '120px' }}
    >
      <div className="w-full items-center justify-center bg-black text-center">
        <InsBodyText className="my-8 text-lg">
          Proudly created by Insight
        </InsBodyText>
      </div>
    </InsAppBar>
  )
}

export default InsFooter
