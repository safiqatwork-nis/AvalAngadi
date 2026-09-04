import { ArrowRight, Heart, ShoppingCart, Star } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import productArtwork from '../../../assets/hero-natural-products-branded.png'

const topSellingProducts = [
  { id: 1, name: 'Amla Herbal Hair Pack', brand: 'Aval Angadi Ventures', price: 212, oldPrice: 260, discount: 18, rating: 4.8, reviews: 120, position: '61% center' },
  { id: 2, name: 'Healthy Millet Mix', brand: 'Aval Angadi Ventures', price: 264, oldPrice: 300, discount: 12, rating: 4.7, reviews: 98, position: '68% center' },
  { id: 3, name: 'Organic Ragi Flour', brand: 'Pure Roots', price: 180, oldPrice: 200, discount: 10, rating: 4.9, reviews: 76, position: '75% center' },
  { id: 4, name: 'Amla Pickle (Homemade)', brand: 'Aval Angadi Ventures', price: 225, oldPrice: 250, discount: 10, rating: 4.8, reviews: 110, position: '80% center' },
  { id: 5, name: 'Herbal Hair Oil', brand: 'Aravi Naturals', price: 399, rating: 4.7, reviews: 64, position: '85% center' },
  { id: 6, name: 'Moringa Leaf Powder', brand: 'Aval Angadi Ventures', price: 350, rating: 4.8, reviews: 105, position: '92% center' },
]

export function ProductList({ title, products, compactTop = false }) {
  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (productId) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    )
  }

  return (
    <section className={`bg-white pb-9 sm:pb-14 ${compactTop ? 'pt-3 sm:pt-6' : 'pt-7 sm:pt-14'}`}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between gap-4 sm:mb-6">
          <h2 className="text-lg font-bold text-[#173d29] sm:text-2xl">{title}</h2>
          <Link to="/shop" className="flex shrink-0 items-center gap-1 text-xs font-semibold text-[#c71320] transition hover:text-[#315c1d]">
            View All <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
          {products.map((product) => {
            const isWishlisted = wishlist.includes(product.id)

            return (
              <article key={product.id} className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-[138px] overflow-hidden bg-[#f7f3e8] sm:h-[168px]">
                  <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
                    <img
                      src={productArtwork}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      style={{ objectPosition: product.position }}
                    />
                  </Link>

                  {product.discount && (
                    <span className="absolute left-3 top-3 rounded-md bg-[#315c1d] px-2 py-1.5 text-[10px] font-extrabold leading-tight text-white shadow">
                      {product.discount}%<br />OFF
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-600 shadow-sm transition hover:text-[#b5121b]"
                  >
                    <Heart size={17} fill={isWishlisted ? 'currentColor' : 'none'} className={isWishlisted ? 'text-[#b5121b]' : ''} />
                  </button>
                </div>

                <div className="flex min-h-[150px] flex-col p-2.5 sm:min-h-[160px] sm:p-3.5">
                  <Link to={`/product/${product.id}`} className="line-clamp-2 text-[12px] font-bold leading-4 text-neutral-900 hover:text-[#b5121b] sm:text-[13px] sm:leading-5">
                    {product.name}
                  </Link>
                  <p className="mt-1 truncate text-[10px] font-medium text-neutral-500">{product.brand}</p>

                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-[15px] font-extrabold text-[#1f3516]">₹{product.price}</span>
                    {product.oldPrice && <span className="text-[11px] text-neutral-400 line-through">₹{product.oldPrice}</span>}
                  </div>

                  <div className="mt-auto flex flex-col items-stretch gap-2 pt-3 sm:flex-row sm:items-end sm:justify-between sm:pt-4">
                    <span className="hidden items-center gap-1 whitespace-nowrap text-[10px] font-semibold text-neutral-600 sm:flex">
                      <Star size={13} className="fill-[#f5a000] text-[#f5a000]" />
                      {product.rating} <span className="text-neutral-400">({product.reviews})</span>
                    </span>
                    <button
                      type="button"
                      className="flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-[#d10a16] px-2 py-2.5 text-[10px] font-bold text-white shadow-sm transition hover:bg-[#a9000a] sm:px-3 sm:py-2"
                    >
                      <ShoppingCart size={14} /> Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TopSellingProducts() {
  return <ProductList title="Top Selling Products" products={topSellingProducts} />
}

export default TopSellingProducts
