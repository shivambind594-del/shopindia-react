export default function BottomNav({ cartCount }) {
  return (
    <div className="bottom-nav">
      <a href="#" className="bottom-nav-item">
        <i className="bi bi-house-door-fill"></i>
        <span>Home</span>
      </a>
      <a href="#" className="bottom-nav-item">
        <i className="bi bi-cart-fill"></i>
        <span>Cart</span>
        {cartCount > 0 && <span className="bottom-nav-badge">{cartCount}</span>}
      </a>
      <a href="#" className="bottom-nav-item">
        <i className="bi bi-list"></i>
        <span>Menu</span>
      </a>
    </div>
  )
}