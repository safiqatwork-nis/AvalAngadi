import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  Store,
  UserRound,
  X,
} from 'lucide-react'
import TopInfoBar from './TopInfoBar'
import SubHeader from './SubHeader'
import AvalAngadiLogo from '../assets/aval-angadi-logo.png'

function HeaderAction({
  icon: Icon,
  label,
  to,
  badge,
  statusDot = false,
}) {
  return (
    <Link
      to={to}
      className="group flex h-full min-w-[52px] flex-col items-center justify-center text-neutral-800 transition-colors duration-200 hover:text-[#b5121b]"
      aria-label={label}
    >
      <span className="relative flex h-[25px] items-center justify-center">
        <Icon
          size={23}
          strokeWidth={1.45}
          className="transition-transform duration-200 group-hover:scale-105"
        />

        {badge !== undefined && (
          <span className="absolute -right-[7px] -top-[6px] flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#c71320] px-[3px] text-[9px] font-bold leading-none text-white">
            {badge}
          </span>
        )}

        {statusDot && (
          <span className="absolute -right-[2px] bottom-[1px] h-[7px] w-[7px] rounded-full border-[1.5px] border-white bg-[#4d9b36]" />
        )}
      </span>

      <span className="mt-[2px] whitespace-nowrap text-[11px] font-semibold leading-none text-neutral-800 group-hover:text-[#b5121b]">
        {label}
      </span>
    </Link>
  )
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)

  const categories = [
    'All Categories',
    'Fashion',
    'Beauty & Personal Care',
    'Food & Beverages',
    'Home & Kitchen',
    'Jewellery & Accessories',
    'Handmade Products',
    'Health & Wellness',
  ]

  return (
    <>
      {/* =========================================================
          TOP INFO BAR
          DO NOT MODIFY
      ========================================================== */}
      <TopInfoBar />

      <header className="sticky top-0 z-50 w-full bg-white">
        {/* =======================================================
            MAIN HEADER
        ======================================================== */}
        <div className="border-b border-[#e5e5e5] shadow-[0_1px_5px_rgba(0,0,0,0.08)]">
          <div className="mx-auto flex h-[68px] w-full items-center gap-2 px-3 lg:hidden">
            <button
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center text-[#24452e]"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>

            <Link to="/" className="flex shrink-0 items-center gap-1.5" aria-label="Aval Angadi Home">
              <img src={AvalAngadiLogo} alt="Aval Angadi" className="h-11 w-11 object-contain" />
              <span className="hidden min-[390px]:block">
                <strong className="block whitespace-nowrap text-[15px] font-bold leading-none text-[#b5121b]">Aval Angadi</strong>
                <small className="mt-1 block whitespace-nowrap text-[6px] font-semibold text-neutral-500">A Marketplace by Women</small>
              </span>
            </Link>

            <form className="ml-1 flex h-9 min-w-0 flex-1 items-center rounded-full border border-neutral-300 bg-white px-3" onSubmit={(event) => event.preventDefault()}>
              <Search size={16} className="shrink-0 text-neutral-500" />
              <input type="search" aria-label="Search products" placeholder="Search products..." className="min-w-0 flex-1 bg-transparent px-2 text-[10px] outline-none" />
            </form>

            <Link to="/wishlist" aria-label="Wishlist" className="shrink-0 text-[#24452e]"><Heart size={23} /></Link>
            <Link to="/cart" aria-label="Cart" className="relative shrink-0 text-[#24452e]">
              <ShoppingCart size={24} />
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#c71320] px-1 text-[9px] font-bold text-white">0</span>
            </Link>
          </div>

          <div className="mx-auto hidden min-h-[92px] w-full max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:flex lg:gap-6 lg:px-8">

            {/* =================================================
                LOGO + BRAND NAME + TAGLINE
            ================================================== */}
            <Link
              to="/"
              className="flex w-[285px] shrink-0 items-center gap-3"
              aria-label="Aval Angadi Home"
            >
              {/* Logo Image */}
             <div className="flex h-[85px] w-[85px] shrink-0 items-center justify-center overflow-hidden">
  <img
    src={AvalAngadiLogo}
    alt="Aval Angadi Logo"
  />
</div>

              {/* Brand Text */}
              <div className="flex min-w-0 flex-col justify-center">
                <span className="whitespace-nowrap text-[25px] font-bold leading-[28px] tracking-[-0.5px] text-[#b5121b]">
                  Aval Angadi
                </span>

                <span className="mt-[3px] whitespace-nowrap text-[9px] font-medium leading-[13px] tracking-[0.2px] text-neutral-500">
                  India&apos;s Women-Led Marketplace
                </span>
              </div>
            </Link>

            {/* =================================================
                DESKTOP SEARCH
            ================================================== */}
            <div className="hidden min-w-0 flex-1 lg:block">
              <form
                className="flex h-[42px] w-full overflow-visible rounded-[5px] border border-[#d9d9d9] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)] focus-within:border-[#c71320]"
                role="search"
                onSubmit={(event) => event.preventDefault()}
              >
                <label
                  className="sr-only"
                  htmlFor="desktop-search"
                >
                  Search products, brands and more
                </label>

                {/* Search Input */}
                <input
                  id="desktop-search"
                  type="search"
                  placeholder="Search for products, brands and more..."
                  className="min-w-0 flex-1 bg-transparent px-4 text-[12px] text-neutral-800 outline-none placeholder:text-[#999]"
                />

                {/* Category Dropdown */}
                <div className="relative flex shrink-0">
                  <button
                    type="button"
                    onClick={() => setCategoryOpen((open) => !open)}
                    className="flex w-[145px] items-center justify-between border-l border-[#eeeeee] px-3 text-[11px] font-semibold text-[#333] transition hover:bg-[#fafafa]"
                  >
                    <span>All Categories</span>

                    <ChevronDown
                      size={14}
                      strokeWidth={1.7}
                      className={`transition-transform duration-200 ${
                        categoryOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {categoryOpen && (
                    <div className="absolute right-0 top-[47px] z-[70] w-[210px] overflow-hidden rounded-md border border-[#e2e2e2] bg-white py-1 shadow-[0_5px_20px_rgba(0,0,0,0.12)]">
                      {categories.map((category) => (
                        <button
                          key={category}
                          type="button"
                          onClick={() => setCategoryOpen(false)}
                          className="block w-full px-4 py-2.5 text-left text-[11px] text-neutral-700 transition hover:bg-[#fff4f4] hover:text-[#bd111b]"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  aria-label="Search"
                  className="flex w-[44px] shrink-0 items-center justify-center bg-[#c71320] text-white transition hover:bg-[#a90e19]"
                >
                  <Search
                    size={20}
                    strokeWidth={2}
                  />
                </button>
              </form>
            </div>

            {/* =================================================
                RIGHT ACTIONS
            ================================================== */}
            <div className="ml-auto flex h-full shrink-0 items-center gap-3 sm:gap-4 lg:gap-5 xl:gap-6">

              {/* Stores */}
              <HeaderAction
                icon={Store}
                label="Stores"
                to="/shop"
              />

              {/* Wishlist */}
              <HeaderAction
                icon={Heart}
                label="Wishlist"
                to="/wishlist"
                statusDot
              />

              {/* Cart */}
              <HeaderAction
                icon={ShoppingCart}
                label="Cart"
                to="/cart"
                badge={0}
              />

              {/* =================================================
                  PROFILE
              ================================================== */}
              <Link
                to="/profile"
                className="hidden h-full items-center gap-2 border-l border-[#e3e3e3] pl-4 text-neutral-800 transition hover:text-[#b5121b] sm:flex lg:pl-5"
              >
                {/* Profile Image */}
                <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f4eee5]">
                  <UserRound
                    size={19}
                    strokeWidth={1.5}
                    className="text-neutral-700"
                  />
                </span>

                {/* Profile Name */}
                <span className="hidden flex-col lg:flex">
                  <span className="text-[10px] leading-[13px] text-neutral-500">
                    Hi,
                  </span>

                  <span className="max-w-[75px] truncate text-[11px] font-semibold leading-[14px] text-neutral-800">
                    Maria
                  </span>
                </span>

                {/* Dropdown */}
                <ChevronDown
                  size={14}
                  strokeWidth={1.7}
                  className="hidden lg:block"
                />
              </Link>

              {/* =================================================
                  MOBILE MENU BUTTON
              ================================================== */}
              <button
                type="button"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-md text-neutral-700 transition hover:bg-neutral-100 sm:hidden"
                onClick={() =>
                  setMobileMenuOpen((open) => !open)
                }
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? (
                  <X size={24} strokeWidth={1.8} />
                ) : (
                  <Menu size={24} strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>

          {/* =======================================================
              MOBILE SEARCH
          ======================================================== */}
          <div className="hidden">
            <form
              className="flex h-[40px] overflow-hidden rounded-[5px] border border-[#d9d9d9] bg-white"
              role="search"
              onSubmit={(event) => event.preventDefault()}
            >
              <label
                className="sr-only"
                htmlFor="mobile-search"
              >
                Search products and brands
              </label>

              <input
                id="mobile-search"
                type="search"
                placeholder="Search for products, brands and more..."
                className="min-w-0 flex-1 px-3 text-[11px] outline-none placeholder:text-[#999]"
              />

              <button
                type="submit"
                aria-label="Search"
                className="flex w-[44px] items-center justify-center bg-[#c71320] text-white"
              >
                <Search size={18} />
              </button>
            </form>
          </div>
        </div>

        <SubHeader />

        {/* =========================================================
            MOBILE MENU
        ========================================================== */}
        {mobileMenuOpen && (
          <div className="border-b border-[#e1e1e1] bg-white shadow-lg lg:hidden">
            <nav className="flex flex-col">

              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-neutral-100 px-5 py-3.5 text-[12px] font-semibold text-neutral-700 hover:bg-[#fff5f5] hover:text-[#bd111b]"
              >
                Home
              </Link>

              <Link
                to="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-neutral-100 px-5 py-3.5 text-[12px] font-semibold text-neutral-700 hover:bg-[#fff5f5] hover:text-[#bd111b]"
              >
                Stores
              </Link>

              <Link
                to="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-neutral-100 px-5 py-3.5 text-[12px] font-semibold text-neutral-700 hover:bg-[#fff5f5] hover:text-[#bd111b]"
              >
                Products
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-neutral-100 px-5 py-3.5 text-[12px] font-semibold text-neutral-700 hover:bg-[#fff5f5] hover:text-[#bd111b]"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-neutral-100 px-5 py-3.5 text-[12px] font-semibold text-neutral-700 hover:bg-[#fff5f5] hover:text-[#bd111b]"
              >
                Contact Us
              </Link>

              <Link
                to="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-neutral-100 px-5 py-3.5 text-[12px] font-semibold text-neutral-700 hover:bg-[#fff5f5] hover:text-[#bd111b]"
              >
                Join as Seller
              </Link>

              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-neutral-100 px-5 py-3.5 text-[12px] font-semibold text-neutral-700 hover:bg-[#fff5f5] hover:text-[#bd111b]"
              >
                Seller Login
              </Link>

              {/* Mobile Account Actions */}
              <div className="grid grid-cols-3 gap-2 bg-[#fafafa] p-4">

                <Link
                  to="/wishlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center justify-center gap-1.5 rounded-md border bg-white py-3 text-neutral-700"
                >
                  <Heart size={20} strokeWidth={1.5} />
                  <span className="text-[10px] font-semibold">
                    Wishlist
                  </span>
                </Link>

                <Link
                  to="/cart"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center justify-center gap-1.5 rounded-md border bg-white py-3 text-neutral-700"
                >
                  <ShoppingCart
                    size={20}
                    strokeWidth={1.5}
                  />
                  <span className="text-[10px] font-semibold">
                    Cart
                  </span>
                </Link>

                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center justify-center gap-1.5 rounded-md border bg-white py-3 text-neutral-700"
                >
                  <UserRound
                    size={20}
                    strokeWidth={1.5}
                  />
                  <span className="text-[10px] font-semibold">
                    Profile
                  </span>
                </Link>

              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
