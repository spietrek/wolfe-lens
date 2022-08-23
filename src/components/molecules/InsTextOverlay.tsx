interface IProps {
  renderText: () => JSX.Element
  children: React.ReactNode
}

const InsTextOverlay = ({ renderText, children }: IProps): JSX.Element => {
  return (
    <div className="relative">
      {children}
      <div className="absolute bottom-0 ml-12 mb-16">{renderText()}</div>
    </div>
  )
}

export default InsTextOverlay
