import { useState } from 'react'

export default function ShopNewsletter() {
  const [signupMessage, setSignupMessage] = useState('')

  return (
    <section className="shop-newsletter" aria-labelledby="shop-newsletter-title">
      <div className="shop-newsletter-copy"><h2 id="shop-newsletter-title">Stay Updated with<br />New Products &amp; Offers</h2><p>Be the first to know about new arrivals, exclusive offers<br className="promo-desktop-break" /> and healthy living tips.</p></div>
      <form className="shop-newsletter-form" onSubmit={(event) => { event.preventDefault(); setSignupMessage('Newsletter signup is not available yet. Please check back soon.') }}>
        <label className="sr-only" htmlFor="shop-newsletter-email">Email address</label>
        <input id="shop-newsletter-email" name="email" type="email" placeholder="Enter your email address" autoComplete="email" required />
        <button type="submit">Subscribe</button>
      </form>
      {signupMessage && <p className="shop-newsletter-status" role="status">{signupMessage}</p>}
    </section>
  )
}
