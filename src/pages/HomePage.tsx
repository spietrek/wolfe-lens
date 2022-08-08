import InsHome from '../components/templates/InsHome'

const product = {
  id: 1001,
  name: 'Slayer',
  subtitle: '29 Carbon - 140mm',
  financials: {
    price: 7299,
    recurrence: 1,
  },
  productTitle: 'Climb. Descend. Smile. Repeat.',
  productDescription:
    'The quiet Quiver Killer strikes again. The Slayer is our 140mm 29” big-wheeled trail bike featuring a steeper 77° seat angle and the best attributes from both its Following and Wreckoning brothers. Still, the Slayer stands on its own, with an increased reach that benefits both climbing and descending, a fierce DH capability, an Enduro heart, and diabolical cornering powers. Quiet, stiff, fast and poppy-as-hell, the Offering sacrifices nothing but gives you God-like powers. All hail, the Dark Lord of singletrack.',
  productImage: '/assets/images/mb-right-top.png',
  heroImage1: '/assets/images/mb-left-top.png',
  heroImage2: '/assets/images/mb-left-bottom.png',
  heroImage3: '/assets/images/mb-right-bottom.png',
  colors: [
    { id: '001', value: 'black', hex: '#000' },
    { id: '002', value: 'red', hex: '#ff0000' },
    { id: '003', value: 'yellow', hex: '#f9db24' },
  ],
  sizes: [
    { id: '001', value: 'S' },
    { id: '002', value: 'M' },
    { id: '003', value: 'L' },
    { id: '004', value: 'XL' },
  ],
  similiarProducts: [1002, 1003, 1004, 1005],
}

const HomePage = (): JSX.Element => {
  return <InsHome product={product} />
}

export default HomePage
