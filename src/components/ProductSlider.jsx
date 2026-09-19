import { useRef } from 'react'

function ProductSlider({ title, products, onAddToCart }) {
  const trackRef = useRef(null)

  const scroll = (direction) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: direction === 'left' ? -280 : 280,
        behavior: 'smooth',
      })
    }
  }

  if (products.length === 0) return null

  return (
    <div className="card-row-single">
      <div className="product-card wide-slider-card">
        <h2>{title}</h2>

        <div className="slider-wrap">
          <button className="slider-arrow slider-arrow-left" onClick={() => scroll('left')} aria-label="Previous">
            <i className="bi bi-chevron-left"></i>
          </button>

          <div className="slider-track" ref={trackRef}>
            {products.map((product) => (
              <div className="slider-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <span>{product.name}</span>
                <button
                  className="add-to-cart-btn"
                  onClick={() => onAddToCart(product.id)}
                  style={{
                    marginTop: '8px',
                    padding: '6px 10px',
                    background: '#febd69',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    width: '100%',
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <button className="slider-arrow slider-arrow-right" onClick={() => scroll('right')} aria-label="Next">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <a href="#" className="see-more">See all deals</a>
      </div>
    </div>
  )
}

export default ProductSlider