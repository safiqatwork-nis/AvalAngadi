import { ArrowRight, Clock3, Mail, MessageSquare, Phone, UserRound } from 'lucide-react'

export default function SendUsMessage({ draftReady, onSubmit, onChange }) {
  return (
    <section className="contact-form-panel">
      <h2>Send Us a Message</h2>
      <p className="contact-intro">Fill out the form below and we’ll get back to you shortly.</p>
      <form onSubmit={onSubmit} onChange={onChange}>
        <div className="contact-fields">
          <label htmlFor="contact-name">Full Name <em>*</em><span className="contact-input"><UserRound /><input id="contact-name" name="fullName" autoComplete="name" placeholder="Enter your full name" maxLength={100} required /></span></label>
          <label htmlFor="contact-email">Email Address <em>*</em><span className="contact-input"><Mail /><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="Enter your email address" maxLength={254} required /></span></label>
          <label htmlFor="contact-phone">Phone Number<span className="contact-input"><Phone /><input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" pattern="[+0-9\\(\\) .\\-]{7,20}" title="Enter a phone number with 7–20 characters using digits, spaces, +, parentheses or hyphens." /></span></label>
          <label htmlFor="contact-subject">Subject <em>*</em><span className="contact-input"><MessageSquare /><select id="contact-subject" name="subject" defaultValue="" required><option value="" disabled>Select a subject</option><option>Order enquiry</option><option>Product enquiry</option><option>Shipping &amp; delivery</option><option>Returns &amp; refunds</option><option>Seller enquiry</option><option>Feedback</option><option>Other</option></select></span></label>
          <label className="contact-message" htmlFor="contact-message">Message <em>*</em><span className="contact-input"><MessageSquare /><textarea id="contact-message" name="message" placeholder="Write your message here..." required maxLength={5000} /></span></label>
        </div>
        <button className="contact-send" type="submit">Send Message <ArrowRight size={19} /></button>
        <p className="contact-response"><Clock3 size={17} /> We usually respond within 24 hours.</p>
        <p className="contact-email-note">Opens your email app with your message ready to send.</p>
        {draftReady && <p className="contact-form-status" role="status">Your email draft is ready. Please send it from your email app. If no app opened, email <a href="mailto:hello@avalangadi.com">hello@avalangadi.com</a>. Your message has not been sent from this website.</p>}
      </form>
    </section>
  )
}
