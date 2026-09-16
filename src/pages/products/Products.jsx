import { useMemo, useState } from 'react'
import { ChevronDown, Filter, Gift, Heart, Leaf, Search, ShoppingCart, Sparkles, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/hero-natural-products-branded.png'
import naturalImage from '../../assets/natural1.png'
import './Products.css'
import ProductsPromo from './ProductsPromo'

const categories = ['All Products', 'Hair Care', 'Skin Care', 'Health Care', 'Daily Essentials', 'Organic Foods', 'Herbal Teas', 'Snacks', 'Personal Care', 'Gift Sets']
const products = [
  ['Amla Candy', 'Natural Immunity Booster', '₹299', 'Organic Foods', 'Bestseller', '24'],
  ['Moringa Leaf Powder', 'Pure & Natural', '₹249', 'Health Care', '', '89'],
  ['Millet Munch', 'Healthy Snack', '₹199', 'Snacks', '', '76'],
  ['Amla Tea', 'Rich in Antioxidants', '₹299', 'Herbal Teas', 'New Arrival', '63'],
  ['Hibiscus Hair Oil', 'For Stronger & Shinier Hair', '₹349', 'Hair Care', '', '52'],
  ['Turmeric Face Pack', 'Natural Glow', '₹299', 'Skin Care', 'Featured', '89'],
  ['Herbal Bath Powder', 'Chemical Free', '₹249', 'Personal Care', '', '41'],
  ['Ragi Cookies', 'Nutritious & Tasty', '₹199', 'Snacks', '', '57'],
  ['Neem Soap', 'Pure & Gentle', '₹149', 'Personal Care', '', '45'],
  ['Triphala Capsules', 'Digestive Wellness', '₹299', 'Health Care', '', '38'],
  ['Moringa Tea', 'Daily Wellness', '₹279', 'Herbal Teas', 'Bestseller', '91'],
  ['Gift Hamper', 'A Thoughtful Choice', '₹999', 'Gift Sets', '', '22'],
].map((product) => Object.assign(product, { rating: 5, inStock: true }))

function Products() {
  const [category, setCategory] = useState('All Products')
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [ratings, setRatings] = useState([])
  const [availability, setAvailability] = useState([])
  const [filtersOpen, setFiltersOpen] = useState(false)
  const clearFilters = () => {
    setCategory('All Products')
    setPriceRange([0, 2000])
    setRatings([])
    setAvailability([])
  }
  const toggle = (setter, value) => setter((items) => items.includes(value) ? items.filter((item) => item !== value) : [...items, value])
  const [sort, setSort] = useState('Featured')
  const [wishlist, setWishlist] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const filtered = useMemo(() => {
    const list = products.filter((p) => {
      const price = Number(p[2].slice(1))
      return (category === 'All Products' || p[3] === category)
        && price >= priceRange[0] && price <= priceRange[1]
        && (!ratings.length || ratings.includes(p.rating))
        && (!availability.length || availability.includes(p.inStock))
    })
    return [...list].sort((a, b) => sort === 'Price: Low to High' ? Number(a[2].slice(1)) - Number(b[2].slice(1)) : sort === 'Price: High to Low' ? Number(b[2].slice(1)) - Number(a[2].slice(1)) : 0)
  }, [category, sort, priceRange, ratings, availability])
  return <main className="products-page">
    <div className="products-category-heading"><h2>Shop by Categories</h2><button type="button" onClick={() => setCategory('All Products')}>View All <span>→</span></button></div><div className="products-categories">{categories.map((item) => <button type="button" className={category === item ? 'active' : ''} key={item} onClick={() => setCategory(item)}><span>{item === 'All Products' ? <Leaf /> : item === 'Gift Sets' ? <Gift /> : <Sparkles />}</span>{item}</button>)}</div>
    <section id="product-collection" className="products-content"><aside id="product-filters" className={`products-filters ${filtersOpen ? 'is-open' : ''}`}><div className="products-filter-heading"><strong><Filter size={18} /> Filters</strong><button type="button" onClick={clearFilters}>Clear All</button></div><FilterGroup title="Category">{categories.slice(1).map((item) => <label key={item}><input type="checkbox" checked={category === item} onChange={() => setCategory(category === item ? 'All Products' : item)} />{item}<small>(24)</small></label>)}</FilterGroup><FilterGroup title="Price Range"><div className="price-slider" style={{ '--range-start': `${priceRange[0] / 20}%`, '--range-end': `${priceRange[1] / 20}%` }}>
      <div className="price-slider-track" />
      <input type="range" min="0" max="2000" step="1" value={priceRange[0]} aria-label="Minimum price" aria-valuetext={`₹${priceRange[0]}`} onChange={(e) => setPriceRange(([, max]) => [Math.min(Number(e.target.value), max - 1), max])} />
      <input type="range" min="0" max="2000" step="1" value={priceRange[1]} aria-label="Maximum price" aria-valuetext={`₹${priceRange[1]}`} onChange={(e) => setPriceRange(([min]) => [min, Math.max(Number(e.target.value), min + 1)])} />
    </div><p aria-live="polite">₹{priceRange[0].toLocaleString('en-IN')} – ₹{priceRange[1].toLocaleString('en-IN')}</p></FilterGroup><FilterGroup title="Brand">{['Aval Angadi', "Nature’s Treat", 'Herbal Living', 'Earthy Goodness'].map((x) => <label key={x}><input type="checkbox" />{x}<small>(24)</small></label>)}</FilterGroup><FilterGroup title="Ratings">{[5, 4, 3, 2, 1].map((rating) => <label className="rating-filter" key={rating}><input type="checkbox" checked={ratings.includes(rating)} onChange={() => toggle(setRatings, rating)} aria-label={`${rating} stars`} /><span className="filter-stars" aria-hidden="true">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={17} fill="currentColor" strokeWidth={0} className={star <= rating ? 'filled' : 'empty'} />)}</span><small>({products.filter((product) => product.rating === rating).length})</small></label>)}</FilterGroup><FilterGroup title="Availability">{[true, false].map((inStock) => <label key={String(inStock)}><input type="checkbox" checked={availability.includes(inStock)} onChange={() => toggle(setAvailability, inStock)} />{inStock ? 'In Stock' : 'Out of Stock'} <small>({products.filter((product) => product.inStock === inStock).length})</small></label>)}</FilterGroup></aside><div className="products-results"><div className="products-mobile-heading"><h2>Top Products</h2><div><button type="button" aria-expanded={filtersOpen} aria-controls="product-filters" onClick={() => setFiltersOpen((open) => !open)}><Filter size={16} /> Filters</button><select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products"><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option></select></div></div><div className="products-toolbar"><span>Showing <b>{filtered.length ? 1 : 0}–{filtered.length}</b> of {products.length} products</span><label>Sort by: <select value={sort} onChange={(e) => setSort(e.target.value)}><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option></select></label></div><div className="product-grid">{filtered.map((product, index) => <article className="product-card" key={product[0]}><div className="product-image">{product[4] && <em>{product[4]}</em>}<img src={index % 2 ? naturalImage : heroImage} alt={product[0]} /></div><h2>{product[0]}</h2><p>{product[1]}</p><div className="product-rating"><b>★★★★★</b> <span>({product[5]})</span></div><strong className="product-price">{product[2]}</strong><div className="product-card-actions"><button type="button" className="add-cart" onClick={() => setCartCount((n) => n + 1)}>Add to Cart</button><button type="button" className={`wishlist-button ${wishlist.includes(product[0]) ? 'liked' : ''}`} aria-label={`Add ${product[0]} to wishlist`} onClick={() => setWishlist((items) => items.includes(product[0]) ? items.filter((x) => x !== product[0]) : [...items, product[0]])}><Heart size={20} fill="currentColor" /></button></div></article>)}</div>{!filtered.length && <div className="products-empty"><Search size={30} /><h2>No products match your filters</h2><button type="button" onClick={clearFilters}>View all products</button></div>}</div></section><ProductsPromo />{cartCount > 0 && <Link className="products-cart-toast" to="/cart"><ShoppingCart size={17} /> {cartCount} item{cartCount > 1 ? 's' : ''} in cart</Link>}</main>
}
function FilterGroup({ title, children }) {
  const [open, setOpen] = useState(true)
  return <div className="filter-group"><h3><button type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>{title}<ChevronDown size={15} className={open ? 'expanded' : ''} /></button></h3>{open && children}</div>
}
export default Products
