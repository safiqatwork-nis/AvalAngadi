import { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import MobileBottomNav from '../components/MobileBottomNav'
import { useLocation } from 'react-router-dom'

function MainLayout({ children }) {
  const { pathname, search } = useLocation()
  const routePath = pathname.replace(/\/+$/, '') || '/'
  const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(routePath)
  const isBackoffice = ['/admin', '/vendor', '/seller'].includes(routePath)
  const isMinimalLayout = isBackoffice || isAuthPage

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, search])

  useEffect(() => {
    if (isAuthPage) {
      document.body.classList.add('auth-page')
    } else {
      document.body.classList.remove('auth-page')
    }
    return () => document.body.classList.remove('auth-page')
  }, [isAuthPage])

  useEffect(() => {
    const animatedNodes = document.querySelectorAll(
      'section, article, li, .product-card, .category-card, .testimonial-card, .stat-card, .newsletter, .info-card, .feature-card, [data-animate]'
    )

    if (!animatedNodes.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px 0% 0px' }
    )

    animatedNodes.forEach((node, index) => {
      node.classList.add('reveal')
      node.style.transitionDelay = `${index * 20}ms`
      observer.observe(node)
    })

    return () => observer.disconnect()
  }, [pathname, search])

  return (
    <div className={`${isAuthPage ? 'contents' : `flex min-h-screen flex-col bg-neutral-50 ${isMinimalLayout ? '' : 'pb-[66px] lg:pb-0'}`}`}>
      {!isMinimalLayout && <Header />}
      {pathname === '/' && <HeroSection />}
      {pathname === '/shop' && <HeroSection variant="products" showCategories={false} />}
      <div key={`${pathname}${search}`} className={`${isAuthPage ? '' : 'flex-1 route-animate'}`}>{children}</div>
      {!isMinimalLayout && <div className="hidden lg:block"><Footer /></div>}
      {!isMinimalLayout && <MobileBottomNav />}
    </div>
  )
}

export default MainLayout
