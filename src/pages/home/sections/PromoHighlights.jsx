import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import freeShippingImage from '../../../assets/free-shipping1.png'
import naturalImage from '../../../assets/natural1.png'
import productArtwork from '../../../assets/hero-natural-products-branded.png'

const promotions = [
  {
    title: '100% Natural',
    lines: ['Good for You.', 'Good for the planet.'],
    action: 'Explore Now',
    to: '/shop',
    image: naturalImage,
    imagePosition: 'center',
  },
  {
    title: 'Free Shipping',
    lines: ['On Orders Above ₹499'],
    action: 'Shop Now',
    to: '/shop',
    image: freeShippingImage,
    imagePosition: 'center',
  },
  {
    title: 'Combo Offers',
    lines: ['Save More on', 'Your Favorites'],
    action: 'Explore Now',
    to: '/shop',
    image: productArtwork,
    imagePosition: 'center',
  },
]

function PromoHighlights() {
  return (
    <section className="bg-white pb-14 pt-2 sm:pb-16">
      <div className="mx-auto grid max-w-[1440px] gap-4 px-4 sm:px-6 md:grid-cols-3 lg:gap-5 lg:px-8">
        {promotions.map((promotion) => (
          <article
            key={promotion.title}
            className="relative min-h-[160px] overflow-hidden rounded-xl border border-[#e9e5d9] bg-[#eee9d4] shadow-sm md:min-h-[220px]"
            style={{
              backgroundImage: `url(${promotion.image})`,
              backgroundPosition: promotion.imagePosition,
              backgroundSize: 'cover',
            }}
          >
            <div className="relative z-10 flex min-h-[160px] max-w-[54%] flex-col items-start px-5 py-5 md:min-h-[220px] md:px-6 md:py-7 lg:px-7">
              <h2 className="font-['Georgia'] text-[18px] font-bold leading-tight text-[#183112] md:text-[21px] lg:text-[22px]">
                {promotion.title}
              </h2>
              <p className="mt-2 text-[11px] font-semibold leading-5 text-neutral-700 md:mt-4 md:text-[13px] md:leading-6 lg:text-[14px]">
                {promotion.lines.map((line) => (
                  <span key={line} className="block whitespace-nowrap">{line}</span>
                ))}
              </p>
              <Link
                to={promotion.to}
                className="mt-auto inline-flex items-center gap-1.5 rounded-lg bg-[#315c1d] px-4 py-2 text-[10px] font-bold text-white shadow-sm transition hover:bg-[#244914] md:gap-2 md:px-5 md:py-2.5 md:text-[11px]"
              >
                {promotion.action} <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PromoHighlights
