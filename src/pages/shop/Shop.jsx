import ShopBenefits from './sections/ShopBenefits'
import ShopNewsletter from './sections/ShopNewsletter'
import ShopCatalogSection from './sections/ShopCatalogSection'
import WellnessBanner from './sections/WellnessBanner'
import '../../style/products-promo.css'

export default function Shop() {
  return (
    <div className="shop-promo">
      <ShopCatalogSection />
      <ShopBenefits />
      <WellnessBanner />
      <ShopNewsletter />
    </div>
  )
}
