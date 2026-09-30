import { Headphones, Heart, Sprout } from 'lucide-react'
import heroImage from '../../../assets/contact/contact-hero.png'

export default function ContactHeroSection() {
  return (
    <section className="contact-hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="contact-hero-inner">
        <p className="contact-eyebrow">Contact Us</p>
        <h1>We’re Here<br />for You</h1>
        <p className="contact-hero-copy">Have a question, feedback or need support?<br />Our team is always happy to help.</p>
        <div className="contact-promises">
          <div><Sprout /><strong>Real People<br />Real Support</strong></div>
          <div><Headphones /><strong>Quick Response<br />Within 24 Hours</strong></div>
          <div><Heart /><strong>Together for a<br />Healthier Tomorrow</strong></div>
        </div>
      </div>
    </section>
  )
}
