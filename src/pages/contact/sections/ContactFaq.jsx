import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import branch from '../../../assets/decorations/olive-branch.png'

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

export default function ContactFaq({ openFaq, onOpenFaqChange }) {
  return (
    <section className="contact-faq">
      <img src={branch} className="contact-leaves contact-leaves-bottom" alt="" />
      <img src={branch} className="contact-leaves contact-leaves-right" alt="" />
      <div className="contact-section-inner">
        <div className="contact-faq-heading"><div><h2>Frequently Asked Questions</h2><p className="contact-intro">Quick answers to common questions. If you still need help, feel free to reach out to us.</p></div></div>
        <div className="contact-faq-grid">{[faqs.slice(0, 4), faqs.slice(4)].map((column, index) => <div key={index} className="contact-faq-column">{column.map(([question, answer]) => <details key={question} open={openFaq === question} onToggle={(event) => onOpenFaqChange(event.currentTarget.open ? question : null)}><summary>{question}<Plus size={19} /></summary><p>{answer}</p></details>)}</div>)}</div>
      </div>
    </section>
  )
}
