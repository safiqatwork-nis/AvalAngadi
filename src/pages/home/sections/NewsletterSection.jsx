import { BadgePercent, HeartPulse, MailOpen, PackageOpen } from 'lucide-react'
import { useState } from 'react'
import naturalBackground from '../../../assets/natural1.png'

const benefits = [
  { icon: BadgePercent, label: 'Exclusive Offers' },
  { icon: PackageOpen, label: 'New Arrivals' },
  { icon: HeartPulse, label: 'Healthy Living Tips' },
]

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section className="bg-white pb-12 sm:pb-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-xl border border-[#1e4214] bg-[#284f16] bg-cover bg-center shadow-md [background-blend-mode:multiply]"
          style={{ backgroundImage: `url(${naturalBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#244b15]/95 via-[#244b15]/92 to-[#244b15]/25" />

          <div className="relative z-10 grid min-h-[235px] items-center gap-7 px-6 py-8 text-white sm:px-9 lg:grid-cols-[1.05fr_1.35fr] lg:px-12 lg:py-10">
            <div className="flex items-start gap-5">
              <MailOpen className="hidden shrink-0 text-[#a5ad64] sm:block" size={88} strokeWidth={1.1} />
              <div>
                <h2 className="font-['Georgia'] text-[25px] font-bold leading-tight sm:text-[28px]">
                  Stay Updated with<br />New Arrivals &amp; Offers
                </h2>
                <p className="mt-4 max-w-[390px] text-[13px] font-semibold leading-6 text-white/90 sm:text-[14px]">
                  Subscribe to our newsletter and get 10% off on your first order!
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="flex h-12 overflow-hidden rounded-lg bg-white shadow-md sm:h-14">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    setSubscribed(false)
                  }}
                  placeholder="Enter your email address"
                  className="min-w-0 flex-1 px-4 text-[12px] text-neutral-800 outline-none placeholder:text-neutral-400 sm:px-6 sm:text-[13px]"
                />
                <button type="submit" className="shrink-0 bg-[#d10a16] px-5 text-[12px] font-bold text-white transition hover:bg-[#ad0710] sm:px-8 sm:text-[14px]">
                  Subscribe
                </button>
              </form>

              <div className="mt-5 flex flex-wrap gap-3 sm:gap-5">
                {benefits.map(({ icon: Icon, label }) => (
                  <span key={label} className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-[10px] font-semibold backdrop-blur-sm sm:text-[11px]">
                    <Icon size={18} strokeWidth={1.6} />
                    {label}
                  </span>
                ))}
              </div>

              {subscribed && (
                <p role="status" className="mt-3 text-[11px] font-semibold text-[#d8e78e]">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
