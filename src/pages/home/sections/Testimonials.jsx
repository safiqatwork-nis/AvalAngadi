import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonialSlides = [
  [
    { quote: 'The products are absolutely natural and the quality is amazing. Highly recommended!', name: 'Priya S.', city: 'Chennai' },
    { quote: 'Love supporting women entrepreneurs. Aval Angadi is my go-to store for healthy living.', name: 'Anitha R.', city: 'Coimbatore' },
    { quote: 'Fast delivery, excellent packaging and the taste is just pure and real. Very happy!', name: 'Kavitha M.', city: 'Bengaluru' },
  ],
  [
    { quote: 'Fresh, authentic and thoughtfully packed. The entire family loved every product.', name: 'Meena K.', city: 'Madurai' },
    { quote: 'Wonderful quality and honest ingredients. I will definitely order again.', name: 'Lakshmi V.', city: 'Salem' },
    { quote: 'A beautiful marketplace with products that feel genuinely homemade and trustworthy.', name: 'Divya P.', city: 'Chennai' },
  ],
  [
    { quote: 'The amla products are excellent and arrived in perfect condition.', name: 'Revathi N.', city: 'Tirunelveli' },
    { quote: 'I appreciate the natural ingredients and the support given to local women sellers.', name: 'Shanthi A.', city: 'Erode' },
    { quote: 'Simple ordering, quick delivery and great quality. A very good experience.', name: 'Nithya S.', city: 'Trichy' },
  ],
  [
    { quote: 'Traditional flavours and reliable quality. Aval Angadi has become a family favourite.', name: 'Geetha R.', city: 'Vellore' },
    { quote: 'The products feel fresh, natural and made with genuine care.', name: 'Sangeetha M.', city: 'Pondicherry' },
    { quote: 'Excellent service and meaningful products from inspiring women entrepreneurs.', name: 'Harini B.', city: 'Bengaluru' },
  ],
]

function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % testimonialSlides.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="bg-white pb-14 sm:pb-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-['Georgia'] text-[24px] font-bold text-neutral-950 sm:text-[28px]">
          What Our Customers Say
        </h2>

        <div className="mt-7 grid gap-5 sm:grid-cols-3 lg:gap-8">
          {testimonialSlides[activeSlide].map((testimonial, index) => (
            <article
              key={`${activeSlide}-${testimonial.name}`}
              className={`min-h-[235px] rounded-xl border border-[#e6e2d9] bg-white px-6 py-7 text-center shadow-sm sm:min-h-[250px] sm:px-8 ${index > 0 ? 'hidden sm:block' : ''}`}
            >
              <div className="flex justify-center gap-1 text-[#f5a000]" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={21} fill="currentColor" strokeWidth={1.5} />
                ))}
              </div>

              <blockquote className="mx-auto mt-5 max-w-[340px] text-[13px] font-semibold leading-7 text-neutral-800 sm:text-[14px]">
                “{testimonial.quote}”
              </blockquote>

              <p className="mt-6 text-[12px] font-medium text-neutral-600 sm:text-[13px]">
                — {testimonial.name}, {testimonial.city}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2.5" aria-label="Testimonial slides">
          {testimonialSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show testimonial slide ${index + 1}`}
              aria-current={activeSlide === index ? 'true' : undefined}
              className={`h-3 w-3 rounded-full transition ${activeSlide === index ? 'bg-[#d10a16]' : 'bg-neutral-200 hover:bg-neutral-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
