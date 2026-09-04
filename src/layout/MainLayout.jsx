import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import MobileBottomNav from '../components/MobileBottomNav'

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 pb-[66px] lg:pb-0">
      <Header />
      <HeroSection />
      <div className="flex-1">{children}</div>
      <Footer />
      <MobileBottomNav />
    </div>
  )
}

export default MainLayout
