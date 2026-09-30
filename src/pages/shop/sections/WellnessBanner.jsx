import { ArrowRight, HandHeart, Leaf, Sprout } from 'lucide-react'

const values = [
  [Leaf, 'Natural'],
  [Sprout, 'Handcrafted'],
  [HandHeart, 'Empowering Women'],
  [Leaf, 'Sustainable'],
]

export default function WellnessBanner() {
  return (
    <section className="shop-wellness" aria-label="Wellness for every home">
      <div className="shop-wellness-art" role="img" aria-label="Basket of natural wellness products surrounded by green leaves" />
      <div className="shop-wellness-copy">
        <h2>Wellness<br />for Every Home <Leaf aria-hidden="true" /></h2>
        <p>Handpicked products from rural women entrepreneurs<br className="promo-desktop-break" /> bringing nature to your doorstep.</p>
      </div>
      <button type="button" className="shop-collection-link" onClick={() => document.getElementById('product-collection')?.scrollIntoView({ behavior: 'smooth' })}>Explore Our Collections <ArrowRight aria-hidden="true" /></button>
      <div className="shop-values">{values.map(([Icon, label]) => <div key={label}><span><Icon aria-hidden="true" /></span><p>{label}</p></div>)}</div>
    </section>
  )
}
