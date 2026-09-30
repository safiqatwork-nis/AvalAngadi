import NewArrivals from './sections/NewArrivals'
import NewsletterSection from './sections/NewsletterSection'
import ImpactHighlights from './sections/ImpactHighlights'
import PromoHighlights from './sections/PromoHighlights'
import TopSellingProducts from './sections/TopSellingProducts'
import Testimonials from './sections/Testimonials'
import TrustStats from './sections/TrustStats'
import WhyChooseUs from './sections/WhyChooseUs'
import ShopBenefits from '../shop/sections/ShopBenefits'
import ShopNewsletter from '../shop/sections/ShopNewsletter'
import WellnessBanner from '../shop/sections/WellnessBanner'
import '../../style/products-promo.css'

function Home() {
  return (
    <main>
      <TopSellingProducts />
      <div className="shop-promo sm:hidden"><WellnessBanner /><ShopBenefits /><ShopNewsletter /></div>
      <div className="hidden sm:block"><NewArrivals /><PromoHighlights /><WhyChooseUs /><ImpactHighlights /><TrustStats /><Testimonials /><NewsletterSection /></div>
    </main>
  )
}

export default Home
