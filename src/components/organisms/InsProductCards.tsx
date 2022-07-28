import InsHeading from '../atoms/InsHeading'

const InsProductCards = (): JSX.Element => {
  return (
    <section className="mt-[80px] max-w-full overflow-x-auto">
      <InsHeading className="text-center">YOU MAY ALSO LIKE</InsHeading>
      <div className="h-[250px] min-w-[800px] bg-red-500">CARDS GO HERE</div>
    </section>
  )
}

export default InsProductCards
