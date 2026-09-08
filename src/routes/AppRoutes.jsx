import { Route, Routes } from 'react-router-dom'
import RoutePlaceholder from '../components/RoutePlaceholder'
import Admin from '../pages/admin/Admin'
import About from '../pages/about/About'
import Cart from '../pages/cart/Cart'
import Checkout from '../pages/checkout/Checkout'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Product from '../pages/product/Product'
import Profile from '../pages/profile/Profile'
import Shop from '../pages/shop/Shop'
import Signup from '../pages/signup/Signup'
import Wishlist from '../pages/wishlist/Wishlist'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/about" element={<About />} />
      {[
        ['/contact', 'Contact Us'],
        ['/blog', 'Blog'],
        ['/order-tracking', 'Order Tracking'],
        ['/returns', 'Returns & Refunds'],
        ['/shipping-policy', 'Shipping Policy'],
        ['/faq', 'FAQs'],
        ['/privacy-policy', 'Privacy Policy'],
        ['/terms-and-conditions', 'Terms & Conditions'],
      ].map(([path, title]) => (
        <Route key={path} path={path} element={<RoutePlaceholder title={title} />} />
      ))}
    </Routes>
  )
}

export default AppRoutes
