import branch from '../../../assets/decorations/olive-branch.png'

export default function OurLocation() {
  return (
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
  )
}
