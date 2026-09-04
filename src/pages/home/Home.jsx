import NewArrivals from './sections/NewArrivals'
import NewsletterSection from './sections/NewsletterSection'
import ImpactHighlights from './sections/ImpactHighlights'
import PromoHighlights from './sections/PromoHighlights'
import TopSellingProducts from './sections/TopSellingProducts'
import Testimonials from './sections/Testimonials'
import TrustStats from './sections/TrustStats'
import WhyChooseUs from './sections/WhyChooseUs'

function Home() {
  return (
    <main>
      <TopSellingProducts />
      <NewArrivals />
      <PromoHighlights />
      <WhyChooseUs />
      <ImpactHighlights />
      <TrustStats />
      <Testimonials />
      <NewsletterSection />
    </main>
  )
}

export default Home
