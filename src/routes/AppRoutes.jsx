import { Route, Routes } from 'react-router-dom'
import RoutePlaceholder from '../components/RoutePlaceholder'
import Admin from '../pages/admin/Admin'
import Vendor from '../pages/vendor/Vendor'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Cart from '../pages/cart/Cart'
import Checkout from '../pages/checkout/Checkout'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import ProductDetails from '../pages/product-details/ProductDetails'
import Shop from '../pages/shop/Shop'
import Profile from '../pages/profile/Profile'
import Signup from '../pages/signup/Signup'
import Wishlist from '../pages/wishlist/Wishlist'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/products" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/vendor" element={<Vendor />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {[

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
