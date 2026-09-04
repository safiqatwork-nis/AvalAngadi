import { Leaf } from 'lucide-react'
import ecoCertificationLogo from '../../../assets/eco-certification.png'
import fssaiLogo from '../../../assets/fssai.png'
import isoLogo from '../../../assets/ISO-Logo.png'
import startupIndiaLogo from '../../../assets/startup-india.png'
import womenOwnedLogo from '../../../assets/women-owned.png'
import womenPoweringChange from '../../../assets/women-powering-change.png'

const certifications = [
  { image: fssaiLogo, label: 'FSSAI' },
  { image: isoLogo, label: 'ISO Certified' },
  { image: startupIndiaLogo, label: 'Startup India' },
  { image: womenOwnedLogo, label: 'Women-Owned' },
  { image: ecoCertificationLogo, label: 'Eco Friendly' },
]

function ImpactHighlights() {
  return (
    <section className="bg-white pb-12 sm:pb-16">
      <div className="mx-auto grid max-w-[1440px] gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:gap-5 lg:px-8">
        <article className="min-h-[210px] rounded-xl border border-[#ebe8de] bg-[#f8f7f1] px-6 py-7 shadow-sm">
          <h2 className="font-['Georgia'] text-[21px] font-bold text-[#183112] sm:text-[23px]">Certified &amp; Trusted</h2>
          <p className="mt-2 text-[13px] font-semibold text-neutral-600">Your health. Our promise.</p>

          <div className="mt-7 grid grid-cols-5 gap-2">
            {certifications.map(({ image, label }) => (
              <div key={label} className="flex min-w-0 flex-col items-center gap-2 text-center">
                <span className="flex h-12 w-14 items-center justify-center rounded-md bg-white p-1.5 shadow-sm sm:h-14 sm:w-16">
                  <img src={image} alt={`${label} logo`} className="h-full w-full object-contain" />
                </span>
                <span className="text-[8px] font-semibold leading-3 text-neutral-600 sm:text-[9px]">{label}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="relative min-h-[210px] overflow-hidden rounded-xl border border-[#ebe8de] bg-[#f8f7f1] px-6 py-7 shadow-sm">
          <div className="relative z-10 max-w-[68%]">
            <h2 className="font-['Georgia'] text-[21px] font-bold leading-8 text-[#183112] sm:text-[23px]">
              Every Order<br />Creates Impact
            </h2>
            <p className="mt-3 text-[12px] font-semibold leading-6 text-neutral-600 sm:text-[13px]">
              When you shop from Aval Angadi,<br />you support a bigger purpose.
            </p>
          </div>
          <Leaf className="absolute bottom-5 right-7 rotate-[-18deg] text-[#899875]" size={92} strokeWidth={1} />
        </article>

        <article
          className="relative min-h-[210px] overflow-hidden rounded-xl border border-[#ebe8de] bg-[#f8f7f1] bg-cover bg-center shadow-sm"
          style={{ backgroundImage: `url(${womenPoweringChange})` }}
        >
          <div className="relative z-10 max-w-[58%] px-6 py-7">
            <h2 className="font-['Georgia'] text-[20px] font-bold leading-tight text-[#183112] sm:text-[22px]">Women Powering Change</h2>
            <p className="mt-4 text-[12px] font-semibold leading-6 text-neutral-700 sm:text-[13px]">
              Proud to be a part of India&apos;s women-led marketplace.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ImpactHighlights
