import { useEffect, useState } from 'react'
import { ArrowRight, HandHeart, Leaf, Recycle, Store, Grid2X2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import AvalAngadiLogo from '../assets/aval-angadi-logo.png'
import heroBackground from '../assets/hero-natural-products-branded.png'

// Replace these image values with different assets when the next banners are ready.
const slides = [
  { id: 1, image: heroBackground },
  { id: 2, image: heroBackground },
  { id: 3, image: heroBackground },
]

const assurances = [
  { icon: HandHeart, label: 'Women-Owned Brands' },
  { icon: Leaf, label: 'Naturally Grown' },
  { icon: Recycle, label: 'Sustainable Practices' },
  { icon: Store, label: 'Made in India' },
]

const categories = [
  ['🧴', 'Hair Care'],
  ['🪥', 'Oral Care'],
  ['🏺', 'Kitchenwares'],
  ['📚', 'Stationery'],
  ['☕', 'Tableware'],
  ['🫙', 'Drinkware'],
  ['🪴', 'Garden & Pots'],
  ['🏮', 'Electricals'],
  ['🥭', 'Organic'],
  ['🍯', 'Gourmet Foods'],
]

function HeroSection({ variant = 'home', showCategories = true }) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className={`relative bg-white ${showCategories ? 'pb-0 sm:pb-[112px]' : 'pb-0'}`}>
      <div
        className="relative mx-3 min-h-[244px] overflow-hidden rounded-xl bg-cover bg-[71%_center] sm:mx-0 sm:min-h-[520px] sm:rounded-none lg:min-h-[575px] lg:bg-center"
        style={{ backgroundImage: `url(${slides[activeSlide].image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf0]/95 via-[#fffaf0]/68 to-transparent lg:via-[#fffaf0]/20" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/65 via-black/30 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[244px] max-w-[1440px] flex-col justify-between px-5 py-5 sm:min-h-[520px] sm:py-14 lg:min-h-[575px] lg:px-8 lg:py-16">
          <div className="flex max-w-[650px] flex-col items-start gap-4 sm:flex-row sm:gap-6">
            <div className="hidden h-[88px] w-[88px] shrink-0 flex-col items-center justify-center rounded-xl bg-[#294d17] px-2 text-center text-white shadow-lg sm:flex sm:h-[176px] sm:w-[176px] sm:rounded-2xl sm:px-4">
              <img
                src={AvalAngadiLogo}
                alt="Aval Angadi logo"
                className="h-[48px] w-[64px] object-contain sm:h-[82px] sm:w-[112px]"
              />
              <span className="mt-0.5 font-serif text-[10px] font-bold leading-none sm:mt-1 sm:text-xl">Aval Angadi</span>
              <span className="mt-1 text-[5px] font-medium sm:mt-2 sm:text-[9px]">India&apos;s Women-Led Marketplace</span>
            </div>

            <div className="pt-1">
              <h1 className="font-serif text-[31px] font-bold leading-[1.02] text-[#173b25] sm:text-[48px] lg:text-[52px]">
                {variant === 'products' ? <>Natural Goodness<br />for a Better You</> : <>Pure by Nature.<br />Real by Tradition.</>}
              </h1>
              <p className="mt-2 max-w-[205px] text-[10px] font-medium leading-[1.3] text-neutral-800 sm:mt-6 sm:max-w-[430px] sm:text-[15px] sm:leading-6">
                {variant === 'products' ? 'Explore our wide range of natural and handcrafted products, carefully sourced from local makers across India.' : 'From the heart of Tirunelveli, bringing you wholesome, traditional and chemical-free products.'}
              </p>
              <Link
                to="/shop"
                className="mt-3 inline-flex items-center gap-2 rounded-md bg-[#cb0613] px-4 py-2 text-[11px] font-bold text-white shadow-md transition hover:bg-[#a9000a] sm:mt-7 sm:gap-3 sm:bg-[#315c1d] sm:px-7 sm:py-3.5 sm:text-[14px]"
              >
                Shop Now <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="hidden flex-wrap gap-x-9 gap-y-3 text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.9)] sm:flex">
            {assurances.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-[13px] font-bold sm:text-[14px]">
                <Icon className="drop-shadow-md" size={22} strokeWidth={2.1} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-3 left-1/2 z-20 hidden -translate-x-1/2 gap-3 sm:flex sm:bottom-8" aria-label="Hero slideshow navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={activeSlide === index ? 'true' : undefined}
              className={`h-3 w-3 rounded-full border border-white shadow-sm transition ${
                activeSlide === index ? 'bg-[#d20b18]' : 'bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {showCategories && <div className="relative bottom-auto left-auto w-full max-w-none translate-x-0 overflow-hidden border-0 bg-white px-4 py-6 shadow-none sm:absolute sm:bottom-0 sm:left-1/2 sm:w-[calc(100%-2rem)] sm:max-w-[1380px] sm:-translate-x-1/2 sm:rounded-xl sm:border sm:border-neutral-200 sm:px-7 sm:py-5 sm:shadow-lg">
        <div className="mb-4 flex items-center justify-between sm:hidden">
          <h2 className="font-serif text-[21px] font-bold text-[#173d29]">Shop by Categories</h2>
          <Link to="/shop" className="text-xs font-semibold text-[#202020]">View All&nbsp; →</Link>
        </div>
        <div className="grid grid-cols-5 items-start gap-x-2 gap-y-5 sm:flex sm:gap-5 sm:overflow-x-auto sm:[scrollbar-width:none] sm:[&::-webkit-scrollbar]:hidden">
          {categories.map(([icon, label]) => (
            <Link key={label} to="/shop" className="group flex min-w-0 flex-col items-center gap-2 text-center sm:min-w-[88px] sm:flex-1">
              <span className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#f7f2dd] text-2xl transition group-hover:-translate-y-1 group-hover:shadow-md sm:h-[68px] sm:w-[68px] sm:text-3xl">
                {icon}
              </span>
              <span className="text-[9px] font-semibold leading-3 text-[#173d29] sm:whitespace-nowrap sm:text-[11px]">{label}</span>
            </Link>
          ))}

          <Link to="/shop" className="hidden min-h-[91px] min-w-[118px] flex-col items-center justify-center gap-2 rounded-lg bg-[#f6f4ee] text-center text-[#284a1b] sm:flex">
            <Grid2X2 size={25} />
            <span className="text-[10px] font-bold">View All Categories</span>
          </Link>
        </div>
      </div>}
    </section>
  )
}

export default HeroSection
