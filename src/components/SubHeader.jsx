import { useState } from 'react'
import { ChevronDown, Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Stores', to: '/shop' },
  { label: 'Products', to: '/shop' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Join as Seller', to: '/signup' },
  { label: 'Seller Login', to: '/login' },
]

function SubHeader() {
  const [categoriesOpen, setCategoriesOpen] = useState(false)

  return (
    <div className="hidden bg-[#d0000a] text-white lg:block">
      <div className="mx-auto flex h-[54px] w-full max-w-[1440px] items-stretch px-4 sm:px-6 lg:px-8">
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setCategoriesOpen((open) => !open)}
            className="flex h-full w-[280px] items-center gap-4 rounded-t-lg bg-[#990007] px-6 text-left text-[14px] font-bold uppercase tracking-tight transition hover:bg-[#860006]"
            aria-expanded={categoriesOpen}
          >
            <Menu size={23} strokeWidth={2.5} />
            <span className="whitespace-nowrap">Browse Categories</span>
            <ChevronDown
              size={19}
              strokeWidth={2.5}
              className={`ml-auto transition-transform ${categoriesOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {categoriesOpen && (
            <div className="absolute left-0 top-full z-50 w-[280px] border border-neutral-200 bg-white py-2 text-neutral-800 shadow-xl">
              {['All Categories', 'Fashion', 'Beauty & Personal Care', 'Food & Beverages', 'Home & Kitchen'].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setCategoriesOpen(false)}
                  className="block w-full px-6 py-3 text-left text-xs font-medium hover:bg-red-50 hover:text-[#b5121b]"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <nav
          aria-label="Primary navigation"
          className="flex min-w-0 flex-1 items-stretch overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `flex min-w-max flex-1 items-center justify-center px-5 text-[13px] font-bold uppercase tracking-tight transition hover:bg-[#b40008] ${
                  isActive && (link.to === '/' || link.to === '/about') ? 'bg-[#c00009]' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default SubHeader
