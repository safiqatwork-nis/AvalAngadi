import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AvalAngadiLogo from '../assets/aval-angadi-logo.png'

const quickLinks = [
  ['About Us', '/#about'],
  ['Our Stores', '/shop'],
  ['Products', '/shop'],
  ['Blog', '/blog'],
  ['Contact Us', '/#contact'],
  ['Join as Seller', '/signup'],
]

const customerLinks = [
  ['My Account', '/profile'],
  ['Order Tracking', '/profile'],
  ['Wishlist', '/wishlist'],
  ['Returns & Refunds', '/returns'],
  ['Shipping Policy', '/shipping-policy'],
  ['FAQs', '/faq'],
]

const categoryLinks = [
  'Hair Care',
  'Organic Foods',
  'Kitchenwares',
  'Garden & Pots',
  'Gourmet Foods',
]

function FooterLinkList({ links }) {
  return (
    <ul className="space-y-3">
      {links.map(([label, to]) => (
        <li key={label}>
          <Link to={to} className="text-[12px] font-medium text-neutral-700 transition hover:text-[#b5121b]">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-[#e6e1d7] bg-[#faf9f5] text-neutral-900">
      <div className="mx-auto max-w-[1440px] px-5 pt-11 lg:px-8">
        <div className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_0.8fr_1.15fr] lg:gap-12">
          <section>
            <Link to="/" className="flex items-center gap-2.5" aria-label="Aval Angadi home">
              <img src={AvalAngadiLogo} alt="Aval Angadi logo" className="h-[52px] w-[70px] object-contain" />
              <span>
                <strong className="block font-serif text-[18px] font-bold leading-none text-[#b5121b]">Aval Angadi</strong>
                <small className="mt-1 block whitespace-nowrap text-[8px] font-semibold">India&apos;s Women-Led Marketplace</small>
              </span>
            </Link>

            <p className="mt-5 max-w-[245px] text-[12px] font-medium leading-6 text-neutral-700">
              Bringing you the finest naturally grown, chemical-free and handcrafted products from women entrepreneurs across India.
            </p>

            <div className="mt-5 flex gap-3">
              {[
                { icon: FaFacebookF, label: 'Facebook' },
                { icon: FaInstagram, label: 'Instagram' },
                { icon: FaWhatsapp, label: 'WhatsApp' },
                { icon: FaYoutube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#315c1d] text-white transition hover:bg-[#b5121b]"
                >
                  <Icon aria-hidden="true" size={13} />
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-5 text-[13px] font-bold">Quick Links</h2>
            <FooterLinkList links={quickLinks} />
          </section>

          <section>
            <h2 className="mb-5 text-[13px] font-bold">Customer Service</h2>
            <FooterLinkList links={customerLinks} />
          </section>

          <section>
            <h2 className="mb-5 text-[13px] font-bold">Categories</h2>
            <ul className="space-y-3">
              {categoryLinks.map((category) => (
                <li key={category}>
                  <Link to="/shop" className="text-[12px] font-medium text-neutral-700 transition hover:text-[#b5121b]">
                    {category}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/shop" className="text-[12px] font-medium text-neutral-700 transition hover:text-[#b5121b]">
                  View All Categories
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-5 text-[13px] font-bold">Contact Us</h2>
            <address className="space-y-4 text-[12px] font-medium not-italic text-neutral-700">
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-[#b5121b]">
                <Phone size={18} strokeWidth={1.5} className="shrink-0 text-[#6d7d42]" />
                +91 98765 43210
              </a>
              <a href="mailto:hello@avalangadi.com" className="flex items-center gap-3 hover:text-[#b5121b]">
                <Mail size={18} strokeWidth={1.5} className="shrink-0 text-[#6d7d42]" />
                hello@avalangadi.com
              </a>
              <p className="flex items-start gap-3 leading-5">
                <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#6d7d42]" />
                <span>Tirunelveli, Tamil Nadu, India<br />Pin: 627001</span>
              </p>
            </address>

            <div className="mt-6 flex flex-wrap items-center gap-2" aria-label="Accepted payment methods">
              <span className="rounded bg-white px-2 py-1 text-[10px] font-extrabold text-[#173b89] shadow-sm">VISA</span>
              <span className="rounded bg-white px-2 py-1 text-[9px] font-extrabold text-[#e74828] shadow-sm">mastercard</span>
              <span className="rounded bg-white px-2 py-1 text-[10px] font-extrabold italic text-[#46526b] shadow-sm">UPI</span>
              <span className="rounded bg-white px-2 py-1 text-[9px] font-extrabold text-[#394c91] shadow-sm">RuPay</span>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#ddd8ce] py-6 pr-16 text-[11px] font-medium text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-1.5">
            <span className="text-[16px] leading-none">©</span>
            <span>{new Date().getFullYear()} Aval Angadi. All Rights Reserved.</span>
          </p>
          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2" aria-label="Legal links">
            <Link to="/privacy-policy" className="hover:text-[#b5121b]">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-[#b5121b]">Terms &amp; Conditions</Link>
            <Link to="/shipping-policy" className="hover:text-[#b5121b]">Shipping Policy</Link>
          </nav>
        </div>
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="absolute bottom-4 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#315c1d] text-white shadow-lg transition hover:bg-[#b5121b]"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  )
}

export default Footer
