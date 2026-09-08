import { ArrowRight, Eye, HeartHandshake, House, Leaf, ShieldCheck, Sprout, Target, TreePine, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/hero-natural-products-branded.png'
import founderImage from '../../assets/about/founder-portrait.png'
import storyImage from '../../assets/about/our-story.png'
import whoImage from '../../assets/about/who-we-are.png'
import botanicalBranch from '../../assets/decorations/botanical-branch.png'
import leafPair from '../../assets/decorations/leaf-pair.png'
import oliveBranch from '../../assets/decorations/olive-branch.png'
import NewsletterSection from '../home/sections/NewsletterSection'

const values = [
  { icon: ShieldCheck, title: 'Quality You Trust', text: 'Only natural and chemical-free products.' },
  { icon: UsersRound, title: 'Support for Local Makers', text: 'Empowering farmers, artisans and small businesses.' },
  { icon: HeartHandshake, title: 'Community Well-being', text: 'Care for people and communities.' },
  { icon: Sprout, title: 'A Healthier Tomorrow', text: 'Sustainable choices for a better and greener planet.' },
]

const founderStats = [
  { icon: Sprout, number: '50+', label: 'Natural Products' },
  { icon: UsersRound, number: '10K+', label: 'Happy Customers' },
  { icon: Leaf, number: '100%', label: 'Natural Ingredients' },
  { icon: ShieldCheck, number: '', label: 'Years of Trust & Purity' },
]

function SectionLabel({ children }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] text-[#315922] sm:text-[14px]">
      <span className="h-px w-5 bg-[#7ea34a]" />{children}
    </p>
  )
}

function About() {
  return (
    <div className="overflow-hidden bg-[#fffefb] text-[#263326]">
      <section className="relative min-h-[400px] bg-[#f6f0e4] sm:min-h-[460px] lg:min-h-[540px]">
        <img src={heroImage} alt="Aval Angadi natural products in a farm" className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf0] via-[#fffaf0]/90 to-[#fffaf0]/55 lg:via-[#fffaf0]/55 lg:to-transparent" />
        <div className="relative mx-auto flex min-h-[400px] max-w-[1440px] items-center px-5 py-14 sm:min-h-[460px] sm:px-8 lg:min-h-[540px] lg:px-16">
          <div className="max-w-[560px]">
            <h1 className="font-['Georgia'] text-[36px] font-bold leading-tight text-[#23451e] sm:text-[44px] lg:text-[54px]">About Aval Angadi</h1>
            <p className="mt-3 font-['Georgia'] text-[25px] font-bold leading-snug text-[#1d281c] sm:text-[31px] lg:text-[37px]">Rooted in Tradition.<br />Committed to Your Well-being.</p>
            <p className="mt-6 max-w-[600px] text-[15px] font-semibold leading-6 text-neutral-700 sm:text-[17px] sm:leading-7 lg:text-[19px] lg:leading-8">We bring you 100% natural products made with pure ingredients and traditional wisdom for a healthier lifestyle.</p>
          </div>
        </div>
      </section>

      <section className="relative py-14 sm:py-16 lg:py-20">
        <img src={oliveBranch} alt="" aria-hidden="true" className="pointer-events-none absolute -left-7 top-10 h-28 w-28 -rotate-[18deg] object-contain opacity-60 sm:top-20 sm:h-36 sm:w-36 lg:h-44 lg:w-44" />
        <div className="mx-auto grid max-w-[1360px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.18fr_0.42fr] lg:gap-10">
          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-['Georgia'] text-[34px] font-bold text-[#193b20] sm:text-[40px]">Who We Are</h2>
            <p className="mt-5 text-[16px] leading-7 text-neutral-600 sm:text-[18px] sm:leading-8">Aval Angadi is a women-led marketplace bringing together the best of natural, chemical-free and handcrafted products from passionate makers across India.</p>
            <p className="mt-4 text-[16px] leading-7 text-neutral-600 sm:text-[18px] sm:leading-8">Our mission is to promote healthy living, support sustainable practices and empower local communities through the power of tradition.</p>
            <Link to="/shop" className="mt-7 inline-flex items-center gap-3 rounded-md bg-[#2f5c20] px-7 py-3.5 text-[14px] font-bold text-white transition hover:bg-[#244819] sm:text-[15px]">Explore Our Products <ArrowRight size={18} /></Link>
          </div>
          <div className="relative">
            <img src={whoImage} alt="Traditional natural ingredients with mortar and pestle" className="h-[330px] w-full rounded-[35px_95px_35px_95px] object-cover shadow-sm sm:h-[410px]" />
          </div>
          <div className="relative mx-auto flex min-h-[230px] w-[190px] items-center justify-center rounded-[43%_57%_48%_52%/55%_42%_58%_45%] bg-[#edf2df] px-5 text-center font-['Georgia'] text-[24px] italic leading-[1.45] text-[#48613f] sm:w-[210px] sm:text-[28px] lg:min-h-[270px] lg:w-full">
            <p>People<br />Tradition<br />Nature<br />Together</p>
            <img src={leafPair} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-12 left-1/2 h-20 w-20 -translate-x-1/2 object-contain" />
          </div>
        </div>
      </section>

      <section className="relative bg-[#fbf6ea] py-14 sm:py-16 lg:py-20">
        <img src={botanicalBranch} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-4 -left-8 h-32 w-32 -rotate-[18deg] object-contain opacity-55 sm:left-1 sm:h-40 sm:w-40" />
        <div className="absolute bottom-10 right-10 hidden items-end gap-1 text-[#9da48c]/45 lg:flex" aria-hidden="true">
          <TreePine size={92} strokeWidth={1} /><House size={120} strokeWidth={0.9} /><TreePine size={72} strokeWidth={1} />
        </div>
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="relative">
            <img src={storyImage} alt="Woman artisan preparing traditional herbs" className="h-[330px] w-full rounded-[95px_32px_95px_32px] object-cover shadow-sm sm:h-[410px]" />
            <img src={oliveBranch} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-7 z-10 h-24 w-24 rotate-[18deg] object-contain opacity-70 sm:h-28 sm:w-28" />
          </div>
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-['Georgia'] text-[34px] font-bold text-[#193b20] sm:text-[40px]">Our Story</h2>
            <p className="mt-5 text-[16px] leading-7 text-neutral-600 sm:text-[18px] sm:leading-8">Our journey began with a simple belief – that nature has everything we need to live a healthy and balanced life.</p>
            <p className="mt-4 text-[16px] leading-7 text-neutral-600 sm:text-[18px] sm:leading-8">We work closely with local farmers and artisans to bring you products that are pure, authentic and effective.</p>
            <p className="mt-4 text-[16px] leading-7 text-neutral-600 sm:text-[18px] sm:leading-8">From handpicked ingredients to careful processing, we ensure that every product you receive is rooted in purity and made for your well-being.</p>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24">
        <img src={oliveBranch} alt="" aria-hidden="true" className="pointer-events-none absolute bottom-2 -left-8 h-32 w-32 -rotate-[18deg] object-contain opacity-60 sm:bottom-7 sm:left-1 sm:h-40 sm:w-40" />
        <img src={botanicalBranch} alt="" aria-hidden="true" className="pointer-events-none absolute bottom-2 -right-8 h-32 w-32 rotate-[18deg] object-contain opacity-55 sm:bottom-7 sm:right-1 sm:h-40 sm:w-40" />
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="text-center">
            <p className="text-[13px] font-bold uppercase tracking-[0.24em] text-[#315922] sm:text-[14px]">Our Purpose</p>
            <h2 className="mt-2 font-['Georgia'] text-[34px] font-bold text-[#193b20] sm:text-[40px]">Our Mission &amp; Our Vision</h2>
            <p className="mt-3 text-[15px] leading-6 text-neutral-500 sm:text-[17px]">Guided by a deeper purpose to create a healthier, happier and more sustainable tomorrow.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-[1040px] gap-6 md:grid-cols-2">
            <article className="flex min-h-[205px] items-center gap-6 rounded-xl border border-[#edf0e5] bg-[#f4f5ea] p-7 sm:p-9">
              <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#e5edd1] text-[#2e5a21]"><Target size={48} strokeWidth={1.7} /></span>
              <div><h3 className="font-['Georgia'] text-[24px] font-bold sm:text-[27px]">Our Mission</h3><p className="mt-3 text-[16px] leading-7 text-neutral-600 sm:text-[17px]">To provide pure, natural and sustainable products that promote wellness, support local communities and protect our planet.</p></div>
            </article>
            <article className="flex min-h-[205px] items-center gap-6 rounded-xl border border-[#f1ebdf] bg-[#faf3e7] p-7 sm:p-9">
              <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#f3eacb] text-[#2e5a21]"><Eye size={50} strokeWidth={1.7} /></span>
              <div><h3 className="font-['Georgia'] text-[24px] font-bold sm:text-[27px]">Our Vision</h3><p className="mt-3 text-[16px] leading-7 text-neutral-600 sm:text-[17px]">To be India&apos;s most trusted natural lifestyle marketplace, inspiring healthier lives and a greener tomorrow.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto grid max-w-[1360px] overflow-hidden rounded-[15px] border-2 border-[#d5e1aa] bg-[#f4f8ec] shadow-[0_2px_9px_rgba(66,91,39,0.12)] md:grid-cols-2 lg:grid-cols-[0.7fr_1.45fr_1.05fr_0.78fr]">
          <div className="relative flex min-h-[360px] items-center justify-center bg-[#eff5e5] px-6 py-9 text-center font-['Georgia'] text-[25px] italic leading-[1.5] text-[#45603c] md:min-h-[420px] sm:text-[29px]">
            <img src={oliveBranch} alt="" aria-hidden="true" className="pointer-events-none absolute bottom-3 left-2 h-20 w-20 -rotate-[22deg] object-contain opacity-55 sm:bottom-5 sm:left-4" />
            <span className="absolute left-8 top-14 font-serif text-5xl text-[#9bad84]/40">“</span>
            <p>Nature<br />Heals,<br />Women<br />Empower,<br />Together<br />We Grow</p>
            <span className="absolute bottom-12 right-7 font-serif text-5xl text-[#9bad84]/40">”</span>
          </div>

          <div className="flex flex-col justify-center px-7 py-10 sm:px-9 lg:px-8">
            <SectionLabel>Meet the Founder</SectionLabel>
            <h2 className="font-['Georgia'] text-[34px] font-bold leading-tight text-[#193b20] sm:text-[40px]">About Our Founder</h2>
            <p className="mt-4 text-[15px] leading-6 text-neutral-600 sm:text-[16px] sm:leading-7">Aval Angadi was founded by a passionate woman entrepreneur with a vision to create a platform that celebrates India&apos;s rich traditions and natural beauty.</p>
            <p className="mt-3 text-[15px] leading-6 text-neutral-600 sm:text-[16px] sm:leading-7">Driven by her belief in health, sustainability and women empowerment, she built Aval Angadi to support local artisans, farmers and self-help groups across the country.</p>
            <p className="mt-3 text-[15px] leading-6 text-neutral-600 sm:text-[16px] sm:leading-7">Her vision continues to inspire everything we do.</p>
            <p className="mt-4 font-['Georgia'] text-[29px] italic text-[#315922] sm:text-[34px]">Anitha R.</p>
            <p className="text-[14px] font-medium sm:text-[16px]">Founder &amp; CEO, Aval Angadi</p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-t-[115px] bg-[#dfe9cf] lg:rounded-b-[55px] lg:rounded-tl-[135px] lg:rounded-tr-[135px]">
            <img src={botanicalBranch} alt="" aria-hidden="true" className="pointer-events-none absolute -left-8 bottom-0 z-10 h-32 w-32 rotate-[12deg] object-contain opacity-65" />
            <img src={oliveBranch} alt="" aria-hidden="true" className="pointer-events-none absolute -right-7 top-0 z-10 h-28 w-28 -rotate-[18deg] object-contain opacity-65" />
            <img src={founderImage} alt="Founder of Aval Angadi" className="absolute inset-0 h-full w-full object-cover object-[50%_35%]" />
          </div>

          <div className="grid grid-cols-2 content-center gap-x-5 gap-y-8 bg-white/45 p-7 md:min-h-[420px] lg:grid-cols-1 lg:px-8 lg:py-7">
            {founderStats.map(({ icon: Icon, number, label }) => (
              <div key={label} className="flex items-center gap-4 text-[#244a20]">
                <Icon className="shrink-0" size={43} strokeWidth={1.65} />
                <div>
                  {number && <strong className="block font-['Georgia'] text-[28px] leading-none text-[#1d341c] sm:text-[33px]">{number}</strong>}
                  <p className={`${number ? 'mt-2' : ''} text-[14px] font-medium leading-5 text-neutral-700 sm:text-[15px]`}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-24">
        <img src={oliveBranch} alt="" aria-hidden="true" className="pointer-events-none absolute bottom-5 -left-8 h-32 w-32 -rotate-[18deg] object-contain opacity-55 sm:left-1 sm:h-40 sm:w-40" />
        <img src={botanicalBranch} alt="" aria-hidden="true" className="pointer-events-none absolute bottom-5 -right-8 h-32 w-32 rotate-[18deg] object-contain opacity-50 sm:right-1 sm:h-40 sm:w-40" />
        <div className="mx-auto max-w-[1200px] px-5 text-center sm:px-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.24em] text-[#315922] sm:text-[14px]">Our Values</p>
          <h2 className="mt-2 font-['Georgia'] text-[34px] font-bold text-[#193b20] sm:text-[40px]">Our Values</h2>
          <p className="mt-3 text-[15px] leading-6 text-neutral-500 sm:text-[17px]">Integrity in everything we do, quality in every step, and a commitment to people and the planet.</p>
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => <article key={title} className="px-2"><span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#edf1dc] text-[#25521f]"><Icon size={38} strokeWidth={1.6} /></span><h3 className="mt-5 text-[17px] font-bold leading-6 text-[#243b24] sm:text-[19px]">{title}</h3><p className="mx-auto mt-3 max-w-[240px] text-[14px] leading-6 text-neutral-500 sm:text-[16px]">{text}</p></article>)}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  )
}

export default About
