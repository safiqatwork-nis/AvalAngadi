import { useState } from 'react'
import ContactFaq from './sections/ContactFaq'
import ContactHeroSection from './sections/ContactHeroSection'
import ContactMobileFollowup from './sections/ContactMobileFollowup'
import GetInTouch from './sections/GetInTouch'
import OurLocation from './sections/OurLocation'
import SendUsMessage from './sections/SendUsMessage'
import '../../style/contact.css'

function Contact() {
  const [draftReady, setDraftReady] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

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
      <ContactHeroSection />
      <section className="contact-panel" aria-label="Contact our team">
        <SendUsMessage draftReady={draftReady} onSubmit={handleSubmit} onChange={(event) => { event.target.setCustomValidity(''); setDraftReady(false) }} />
        <GetInTouch />
      </section>
      <OurLocation />
      <ContactFaq openFaq={openFaq} onOpenFaqChange={setOpenFaq} />
      <ContactMobileFollowup />
    </main>
  )
}

export default Contact
