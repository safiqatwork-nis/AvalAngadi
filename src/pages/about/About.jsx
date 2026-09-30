import AboutFounderSection from './sections/AboutFounderSection'
import AboutHeroSection from './sections/AboutHeroSection'
import AboutNewsletterSection from './sections/AboutNewsletterSection'
import OurPurposeSection from './sections/OurPurposeSection'
import OurStorySection from './sections/OurStorySection'
import OurValuesSection from './sections/OurValuesSection'
import WhoWeAreSection from './sections/WhoWeAreSection'
import SectionLabel from './sections/SectionLabel'


export default function About() {
  return (
    <div className="overflow-hidden bg-[#fffefb] text-[#263326]">
      <AboutHeroSection />
      <SectionLabel label="Who We Are" />
      <WhoWeAreSection />
      <SectionLabel label="Our Story" />
      <OurStorySection />
      <SectionLabel label="Our Purpose" />
      <OurPurposeSection />
      <SectionLabel label="About Our Founder" />
      <AboutFounderSection />
      <SectionLabel label="Our Values" />
      <OurValuesSection />
      <SectionLabel label="Newsletter" />
      <AboutNewsletterSection />
    </div>
  )
}
