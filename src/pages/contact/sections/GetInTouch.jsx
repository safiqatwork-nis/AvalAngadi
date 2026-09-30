import { ArrowRight, Mail, MapPin, Phone, Store, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

function ContactChannel({ icon: Icon, title, children }) {
  return <div className="contact-channel"><span className="contact-channel-icon"><Icon size={30} strokeWidth={2} /></span><div><h3>{title}</h3>{children}</div></div>
}

export default function GetInTouch() {
  return (
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
  )
}
