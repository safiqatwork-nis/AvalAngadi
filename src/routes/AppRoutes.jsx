import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/admin/Admin'
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
    </Routes>
  )
}

export default AppRoutes
