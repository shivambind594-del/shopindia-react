import { useState } from 'react'
import PromoCards from './components/PromoCards'
import Navbar from './components/Navbar'
import FilterBar from './components/FilterBar'
import Carousel from './components/Carousel'
import ProductSlider from './components/ProductSlider'
import Footer from './components/Footer'
import useCart from './hooks/useCart'
import { products } from './Data/products'
import './App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchText, setSearchText] = useState('')
  const { addToCart, cartCount } = useCart()

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  )

  const kitchenProducts = filteredProducts.filter(
    (p) => p.category === 'kitchen' && (activeCategory === 'all' || activeCategory === 'kitchen')
  )
  const watchProducts = filteredProducts.filter(
    (p) => p.category === 'watch' && (activeCategory === 'all' || activeCategory === 'watch')
  )

  const noResults = kitchenProducts.length === 0 && watchProducts.length === 0

  return (
    <>
      <Navbar cartCount={cartCount} searchText={searchText} onSearchChange={setSearchText} />
      <FilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <Carousel />

 <main className="page-content">
  <PromoCards />

  <ProductSlider
    title="Up to 40% off | Must-Have Kitchen Appliances"
    products={kitchenProducts}
    onAddToCart={addToCart}
  />
  <ProductSlider
    title="Up to 70% off | Bestselling SmartWatches"
    products={watchProducts}
    onAddToCart={addToCart}
  />

  {noResults && (
    <p style={{ textAlign: 'center', fontWeight: 600, marginTop: '20px' }}>
      No results found
    </p>
  )}
</main>

      <Footer />
    </>
  )
}

export default App