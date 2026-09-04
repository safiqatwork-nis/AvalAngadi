import { ProductList } from './TopSellingProducts'

const latestProducts = [
  { id: 101, name: 'Traditional Amla Candy', brand: 'Aval Angadi Ventures', price: 189, oldPrice: 220, discount: 14, rating: 4.9, reviews: 24, position: '78% center' },
  { id: 102, name: 'Cold Pressed Herbal Oil', brand: 'Green Roots', price: 349, oldPrice: 399, discount: 13, rating: 4.7, reviews: 18, position: '84% center' },
  { id: 103, name: 'Natural Moringa Powder', brand: 'Aval Angadi Ventures', price: 279, rating: 4.8, reviews: 31, position: '91% center' },
  { id: 104, name: 'Homemade Amla Preserve', brand: 'Tirunelveli Naturals', price: 245, oldPrice: 280, discount: 12, rating: 4.8, reviews: 16, position: '65% center' },
  { id: 105, name: 'Organic Millet Snack Mix', brand: 'Aval Angadi Ventures', price: 299, rating: 4.6, reviews: 12, position: '72% center' },
  { id: 106, name: 'Fresh Farm Amla Pack', brand: 'Women Grow Collective', price: 159, oldPrice: 180, discount: 12, rating: 4.9, reviews: 27, position: '56% center' },
]

function NewArrivals() {
  return <ProductList title="New Arrivals" products={latestProducts} compactTop />
}

export default NewArrivals
