import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../../../assets/hero-natural-products-branded.png'

export default function AboutHeroSection() {
  return <section className="relative mx-3 mt-3 min-h-[350px] overflow-hidden rounded-xl bg-[#f6f0e4] sm:min-h-[330px] lg:mx-0 lg:mt-0 lg:min-h-[540px] lg:rounded-none">
    <img src={heroImage} alt="Aval Angadi natural products in a farm" className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf0] via-[#fffaf0]/90 to-[#fffaf0]/55 sm:via-[#fffaf0]/65 sm:to-transparent lg:via-[#fffaf0]/55" />
    <div className="relative mx-auto flex min-h-[350px] max-w-[1440px] items-center px-5 py-8 sm:min-h-[330px] sm:px-6 lg:min-h-[540px] lg:px-16 lg:py-14"><div className="max-w-[560px]"><h1 className="font-['Georgia'] text-[32px] font-bold leading-tight text-[#23451e] sm:text-[38px] lg:text-[54px]">About Aval Angadi</h1><p className="mt-2 font-['Georgia'] text-[22px] font-bold leading-snug text-[#1d281c] sm:text-[25px] lg:mt-3 lg:text-[37px]">Rooted in Tradition.<br />Committed to Your Well-being.</p><p className="mt-4 max-w-[360px] text-[14px] font-semibold leading-5 text-neutral-700 sm:text-[15px] sm:leading-5 lg:mt-6 lg:max-w-[600px] lg:text-[19px] lg:leading-8">We bring you 100% natural products made with pure ingredients and traditional wisdom for a healthier lifestyle.</p><Link to="/shop" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#2f5c20] px-6 py-2.5 text-[13px] font-bold text-white shadow-sm lg:hidden">Explore Products <ArrowRight size={16} /></Link></div></div>
    <p className="absolute right-4 top-5 hidden text-center font-['Georgia'] text-lg italic leading-6 text-white [text-shadow:0_1px_4px_rgba(0,0,0,.75)] sm:block lg:hidden">Nature<br />Heals,<br />Women<br />Empower,<br />Communities</p>
    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2 lg:hidden"><span className="h-2.5 w-2.5 rounded-full bg-[#d20b18]" /><span className="h-2.5 w-2.5 rounded-full bg-white" /><span className="h-2.5 w-2.5 rounded-full bg-white" /></div>
  </section>
}
