import { ArrowRight, HandHeart, Leaf, PackageCheck, ShieldCheck, Sprout, Truck, Users } from 'lucide-react'
import { useState } from 'react'
import './ProductsPromo.css'

const values = [
  [Leaf, 'Natural'], [Sprout, 'Handcrafted'], [HandHeart, 'Empowering Women'], [Leaf, 'Sustainable'],
]
const benefits = [
  [Truck, 'Free Shipping', 'on orders above ₹499'],
  [ShieldCheck, 'Secure Payments', '100% safe & secure'],
  [PackageCheck, 'Easy Returns', 'Hassle-free returns'],
  [Users, 'Support Local', 'Women Entrepreneurs'],
]

export default function ProductsPromo() {
  const [signupMessage, setSignupMessage] = useState('')
  return (
    <div className="shop-promo">
      <section className="shop-wellness" aria-label="Wellness for every home">
        <div className="shop-wellness-art" role="img" aria-label="Basket of natural wellness products surrounded by green leaves" />
        <div className="shop-wellness-copy">
          <h2>Wellness<br />for Every Home <Leaf aria-hidden="true" /></h2>
          <p>Handpicked products from rural women entrepreneurs<br className="promo-desktop-break" /> bringing nature to your doorstep.</p>
        </div>
        <button type="button" className="shop-collection-link" onClick={() => document.getElementById('product-collection')?.scrollIntoView({ behavior: 'smooth' })}>Explore Our Collections <ArrowRight aria-hidden="true" /></button>
        <div className="shop-values">{values.map(([Icon, label]) => <div key={label}><span><Icon aria-hidden="true" /></span><p>{label}</p></div>)}</div>
      </section>
      <section className="shop-services" aria-label="Shopping benefits">
        {benefits.map(([Icon, title, description]) => <div className="shop-service" key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></div>)}
      </section>
      <section className="shop-newsletter" aria-labelledby="shop-newsletter-title">
        <div className="shop-newsletter-copy"><h2 id="shop-newsletter-title">Stay Updated with<br />New Products &amp; Offers</h2><p>Be the first to know about new arrivals, exclusive offers<br className="promo-desktop-break" /> and healthy living tips.</p></div>
        <form className="shop-newsletter-form" onSubmit={(event) => { event.preventDefault(); setSignupMessage('Newsletter signup is not available yet. Please check back soon.') }}>
          <label className="sr-only" htmlFor="shop-newsletter-email">Email address</label>
          <input id="shop-newsletter-email" name="email" type="email" placeholder="Enter your email address" autoComplete="email" required />
          <button type="submit">Subscribe</button>
        </form>
        {signupMessage && <p className="shop-newsletter-status" role="status">{signupMessage}</p>}
      </section>
    </div>
  )
}
