import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock3, Headphones, Heart, Mail, MapPin, MessageSquare, Phone, Plus, Sprout, Store, UserRound, UsersRound } from 'lucide-react'
import heroImage from '../../assets/contact/contact-hero.png'
import branch from '../../assets/decorations/olive-branch.png'
import TrustStats from '../home/sections/TrustStats'
import NewsletterSection from '../home/sections/NewsletterSection'
import './Contact.css'

const faqs = [
  ['How can I track my order?', <>Visit <Link to="/order-tracking">Order Tracking</Link> or email us with your order number for help with its status.</>],
  ['What are the shipping charges?', <>Shipping charges depend on your order and delivery location. Please check the total at checkout or contact us before ordering.</>],
  ['How can I return a product?', <>Email hello@avalangadi.com with your order number and the reason for your return. Our team can help you check eligibility and the next steps.</>],
  ['What payment methods do you accept?', <>Available payment options are shown at checkout. If you need help completing a payment, please contact our support team.</>],
  ['Can I become a seller on Aval Angadi?', <>Yes! <Link to="/signup">Join as a seller</Link> or email partners@avalangadi.com to discuss showcasing your products.</>],
  ['How do I find nearby stores?', <>Visit <Link to="/shop">our stores</Link> or contact us with your location so our team can help you find a nearby partner store.</>],
  ['Are your products 100% natural?', <>Please review each product’s ingredients and description for details. Our team can help with questions about a specific product before you buy.</>],
  ['How long does delivery take?', <>Delivery times vary by product and destination. Check the estimate for your order or contact us with your order number for an update.</>],
]

function ContactChannel({ icon: Icon, title, children }) {
  return <div className="contact-channel"><span className="contact-channel-icon"><Icon size={30} strokeWidth={2} /></span><div><h3>{title}</h3>{children}</div></div>
}

function Contact() {
  const [draftReady, setDraftReady] = useState(false)
  const [showAll, setShowAll] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const fields = new FormData(form)
    for (const name of ['fullName', 'message']) {
      const field = form.elements.namedItem(name)
      field.setCustomValidity(String(fields.get(name)).trim() ? '' : 'Please fill in this field.')
    }
    if (!form.reportValidity()) return
    const body = `Name: ${fields.get('fullName').trim()}\nEmail: ${fields.get('email')}\nPhone: ${fields.get('phone') || 'Not provided'}\n\n${fields.get('message').trim()}`
    window.location.href = `mailto:hello@avalangadi.com?subject=${encodeURIComponent(fields.get('subject'))}&body=${encodeURIComponent(body)}`
    setDraftReady(true)
  }

  return (
    <main className="contact-page">
      <section className="contact-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="contact-hero-inner">
          <p className="contact-eyebrow">Contact Us</p>
          <h1>We’re Here<br />for You</h1>
          <p className="contact-hero-copy">Have a question, feedback or need support?<br />Our team is always happy to help.</p>
          <div className="contact-promises">
            <div><Sprout /><strong>Real People<br />Real Support</strong></div>
            <div><Headphones /><strong>Quick Response<br />Within 24 Hours</strong></div>
            <div><Heart /><span>Together for a<br />Healthier Tomorrow</span></div>
          </div>
        </div>
      </section>

      <section className="contact-panel" aria-label="Contact our team">
        <div className="contact-form-panel">
          <h2>Send Us a Message</h2>
          <p className="contact-intro">Fill out the form below and we’ll get back to you shortly.</p>
          <form onSubmit={handleSubmit} onChange={(event) => { event.target.setCustomValidity(''); setDraftReady(false) }}>
            <div className="contact-fields">
              <label htmlFor="contact-name">Full Name <em>*</em><span className="contact-input"><UserRound /><input id="contact-name" name="fullName" autoComplete="name" placeholder="Enter your full name" maxLength={100} required /></span></label>
              <label htmlFor="contact-email">Email Address <em>*</em><span className="contact-input"><Mail /><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="Enter your email address" maxLength={254} required /></span></label>
              <label htmlFor="contact-phone">Phone Number<span className="contact-input"><Phone /><input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" pattern="[+0-9\(\) .\-]{7,20}" title="Enter a phone number with 7–20 characters using digits, spaces, +, parentheses or hyphens." /></span></label>
              <label htmlFor="contact-subject">Subject <em>*</em><span className="contact-input"><MessageSquare /><select id="contact-subject" name="subject" defaultValue="" required><option value="" disabled>Select a subject</option><option>Order enquiry</option><option>Product enquiry</option><option>Shipping & delivery</option><option>Returns & refunds</option><option>Seller enquiry</option><option>Feedback</option><option>Other</option></select></span></label>
              <label className="contact-message" htmlFor="contact-message">Message <em>*</em><span className="contact-input"><MessageSquare /><textarea id="contact-message" name="message" placeholder="Write your message here..." required maxLength={5000} /></span></label>
            </div>
            <button className="contact-send" type="submit">Send Message <ArrowRight size={19} /></button>
            <p className="contact-response"><Clock3 size={17} /> We usually respond within 24 hours.</p>
            <p className="contact-email-note">Opens your email app with your message ready to send.</p>
            {draftReady && <p className="contact-form-status" role="status">Your email draft is ready. Please send it from your email app. If no app opened, email <a href="mailto:hello@avalangadi.com">hello@avalangadi.com</a>. Your message has not been sent from this website.</p>}
          </form>
        </div>
        <aside className="contact-details">
          <h2>Get in Touch</h2>
          <p className="contact-intro">You can also reach us through the following channels.</p>
          <div className="contact-channels">
            <ContactChannel icon={Phone} title="Call Us"><a href="tel:+919876543210">+91 98765 43210</a><p>Mon - Sat, 9:00 AM to 6:00 PM</p></ContactChannel>
            <ContactChannel icon={Mail} title="Email Us"><a href="mailto:hello@avalangadi.com">hello@avalangadi.com</a><p>We usually respond within 24 hours</p></ContactChannel>
            <ContactChannel icon={MapPin} title="Our Office"><strong>Tirunelveli, Tamil Nadu, India</strong><p>Pin: 627001</p></ContactChannel>
            <ContactChannel icon={Store} title="Store Locator"><p>Find our partner stores near you</p><Link className="contact-store-link" to="/shop">View Stores <ArrowRight size={18} /></Link></ContactChannel>
          </div>
          <div className="contact-seller"><ContactChannel icon={UsersRound} title="For Seller Enquiries"><p>Interested in showcasing your<br />products on Aval Angadi?</p><p>Email us at <a href="mailto:partners@avalangadi.com">partners@avalangadi.com</a></p></ContactChannel></div>
        </aside>
      </section>

      <section className="contact-location">
        <img src={branch} className="contact-leaves contact-leaves-top" alt="" />
        <img src={branch} className="contact-leaves contact-leaves-bottom" alt="" />
        <div className="contact-section-inner">
          <h2>Our Location</h2>
          <p className="contact-intro">Visit us at our office or find our store locations across Tamil Nadu.</p>
          <div className="contact-map">
            <iframe title="Map of Tirunelveli, Tamil Nadu" src="https://maps.google.com/maps?q=Tirunelveli%2C%20Tamil%20Nadu%20627001%2C%20India&z=13&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            <a className="contact-map-card" href="https://www.google.com/maps/search/?api=1&query=Tirunelveli%2C%20Tamil%20Nadu%20627001%2C%20India" target="_blank" rel="noreferrer"><strong>Aval Angadi</strong><span>Tirunelveli, Tamil Nadu 627001, India</span><span>View larger map ↗</span></a>
          </div>
        </div>
      </section>

      <section className="contact-faq">
        <img src={branch} className="contact-leaves contact-leaves-bottom" alt="" />
        <img src={branch} className="contact-leaves contact-leaves-right" alt="" />
        <div className="contact-section-inner">
          <div className="contact-faq-heading"><div><h2>Frequently Asked Questions</h2><p className="contact-intro">Quick answers to common questions. If you still need help, feel free to reach out to us.</p></div><button type="button" onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>{showAll ? 'Close all FAQs' : 'View all FAQs'} <ArrowRight size={17} /></button></div>
          <div className="contact-faq-grid">{[faqs.slice(0, 4), faqs.slice(4)].map((column, index) => <div key={index}>{column.map(([question, answer]) => <details key={`${question}-${showAll}`} open={showAll || undefined}><summary>{question}<Plus size={19} /></summary><p>{answer}</p></details>)}</div>)}</div>
        </div>
      </section>

      <div className="contact-mobile-followup">
        <TrustStats />
        <NewsletterSection />
      </div>
    </main>
  )
}
export default Contact
