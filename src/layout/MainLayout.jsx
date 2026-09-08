import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import MobileBottomNav from '../components/MobileBottomNav'
import { useLocation } from 'react-router-dom'

function MainLayout({ children }) {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 pb-[66px] lg:pb-0">
      <Header />
      {pathname === '/' && <HeroSection />}
      <div className="flex-1">{children}</div>
      <Footer />
      <MobileBottomNav />
    </div>
  )
}

export default MainLayout
