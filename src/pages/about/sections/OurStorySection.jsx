import { House, TreePine } from 'lucide-react'
import botanicalBranch from '../../../assets/decorations/botanical-branch.png'
import oliveBranch from '../../../assets/decorations/olive-branch.png'
import storyImage from '../../../assets/about/our-story.png'
import whoImage from '../../../assets/about/who-we-are.png'
import SectionLabel from './SectionLabel'

export default function OurStorySection() {
  return <section className="relative mx-3 mt-1 rounded-xl bg-[#fbf6ea] py-9 sm:py-4 lg:mx-0 lg:mt-0 lg:rounded-none lg:py-20">
    <img src={botanicalBranch} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-4 -left-8 h-32 w-32 -rotate-[18deg] object-contain opacity-55 sm:left-1 sm:h-40 sm:w-40" />
    <div className="absolute bottom-10 right-10 hidden items-end gap-1 text-[#9da48c]/45 lg:flex" aria-hidden="true"><TreePine size={92} strokeWidth={1} /><House size={120} strokeWidth={0.9} /><TreePine size={72} strokeWidth={1} /></div>
    <div className="relative mx-auto grid max-w-[1240px] items-center gap-8 px-5 sm:grid-cols-[0.9fr_1.1fr] sm:gap-7 lg:gap-20 lg:px-8"><div className="relative"><img src={whoImage} alt="Traditional natural ingredients with mortar and pestle" className="h-[240px] w-full rounded-[70px_25px_70px_25px] object-cover shadow-sm sm:h-[165px] lg:hidden" /><img src={storyImage} alt="Woman artisan preparing traditional herbs" className="hidden h-[410px] w-full rounded-[95px_32px_95px_32px] object-cover shadow-sm lg:block" /><img src={oliveBranch} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-7 z-10 h-24 w-24 rotate-[18deg] object-contain opacity-70 sm:h-28 sm:w-28" /></div><div><SectionLabel>Our Story</SectionLabel><h2 className="font-['Georgia'] text-[30px] font-bold text-[#193b20] sm:text-[27px] lg:text-[40px]">Our Story</h2><p className="mt-3 text-[14px] leading-5 text-neutral-600 sm:mt-2 sm:text-[12px] sm:leading-[17px] lg:mt-5 lg:text-[18px] lg:leading-8">Our journey began with a simple belief – that nature has everything we need to live a healthy and balanced life.</p><p className="mt-3 text-[14px] leading-5 text-neutral-600 sm:mt-2 sm:text-[12px] sm:leading-[17px] lg:mt-4 lg:text-[18px] lg:leading-8">We work closely with local farmers and artisans to bring you products that are pure, authentic and effective.</p><p className="mt-3 hidden text-[14px] leading-5 text-neutral-600 lg:block lg:text-[18px] lg:leading-8">From handpicked ingredients to careful processing, we ensure that every product you receive is rooted in purity and made for your well-being.</p></div></div>
  </section>
}
