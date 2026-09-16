import NewArrivals from './sections/NewArrivals'
import NewsletterSection from './sections/NewsletterSection'
import ImpactHighlights from './sections/ImpactHighlights'
import PromoHighlights from './sections/PromoHighlights'
import TopSellingProducts from './sections/TopSellingProducts'
import Testimonials from './sections/Testimonials'
import TrustStats from './sections/TrustStats'
import WhyChooseUs from './sections/WhyChooseUs'
import ProductsPromo from '../products/ProductsPromo'

function Home() {
  return (
    <main>
      <TopSellingProducts />
      <div className="sm:hidden"><ProductsPromo /></div>
      <div className="hidden sm:block"><NewArrivals /><PromoHighlights /><WhyChooseUs /><ImpactHighlights /><TrustStats /><Testimonials /><NewsletterSection /></div>
    </main>
  )
}

export default Home
