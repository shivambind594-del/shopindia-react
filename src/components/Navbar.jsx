function Navbar({ cartCount, searchText, onSearchChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shopindia-navbar">
      <div className="container-fluid">

        {/* Row 1: Logo + Hamburger */}
        <div className="navbar-top-row d-flex align-items-center w-100">
          <a className="navbar-brand d-flex align-items-center" href="#" onClick={(e) => e.preventDefault()}>
            <div className="shopindia-logo-img">
              <svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF9500" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FF6B35" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <circle cx="75" cy="75" r="55" fill="url(#orangeGradient)" />
                <g transform="translate(75, 75)">
                  <path d="M -22 -15 L -18 -24 L 18 -24 L 22 -15 L 22 22 Q 22 28 16 28 L -16 28 Q -22 28 -22 22 Z" fill="white" />
                  <path d="M -14 -24 Q 0 -36 14 -24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <line x1="-18" y1="-15" x2="18" y2="-15" stroke="white" strokeWidth="2.5" opacity="0.9" />
                  <ellipse cx="-6" cy="4" rx="3" ry="7" fill="white" opacity="0.45" />
                </g>
                <text x="160" y="65" fontFamily="Arial, sans-serif" fontSize="56" fontWeight="900" fill="#1F2937" letterSpacing="2">SHOP</text>
                <text x="160" y="115" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="800" fill="#FF9500" letterSpacing="2">INDIA</text>
                <line x1="160" y1="125" x2="450" y2="125" stroke="#FF9500" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="delivery-info d-none d-md-block ms-2">
              <small>Delivering to</small>
              <div className="fw-bold">Vadodara 390007</div>
            </div>
          </a>

          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Row 2: Search bar — ALWAYS visible */}
        <form
          className="search-bar d-flex w-100 my-2"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="form-control"
            type="search"
            placeholder="Search Shop India.in"
            aria-label="Search"
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className="btn btn-warning" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>

        {/* Row 3: Collapsible nav items (hamburger toggles this) */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://flagcdn.com/w32/in.png"
                  alt="India Flag"
                  style={{ height: '16px', width: '22px', marginRight: '4px' }}
                />
                IN EN
              </a>
              <ul className="dropdown-menu p-2">
                <li><p className="fw-bold small px-2 mb-1">CHANGE LANGUAGE</p></li>
                <li><a className="dropdown-item" href="#">English-EN</a></li>
                <li><a className="dropdown-item" href="#">हिन्दी-HI</a></li>
                <li><a className="dropdown-item" href="#">தமிழ்-TA</a></li>
                <li><a className="dropdown-item" href="#">తెలుగు-TE</a></li>
                <li><a className="dropdown-item" href="#">ಕನ್ನಡ-KN</a></li>
                <li><a className="dropdown-item" href="#">മലയാളം-ML</a></li>
                <li><a className="dropdown-item" href="#">বাংলা-BN</a></li>
                <li><a className="dropdown-item" href="#">मराठी-MR</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <small>Hello, sign in</small>
                <br />
                <strong>Account & Lists</strong>
              </a>
              <ul className="dropdown-menu p-3" style={{ minWidth: '340px' }}>
                <div className="text-center mb-3">
                  <button className="btn btn-warning fw-bold">Sign in</button>
                  <br />
                  <small>New customer? <a href="#">Start here</a></small>
                </div>
                <hr />
                <div className="row">
                  <div className="col-6">
                    <h6 className="fw-bold">Your Lists</h6>
                    <ul className="list-unstyled">
                      <li><a href="#" className="dropdown-item">Create a Wish List</a></li>
                      <li><a href="#" className="dropdown-item">Wish from Any Website</a></li>
                      <li><a href="#" className="dropdown-item">Baby Wishlist</a></li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <h6 className="fw-bold">Your Account</h6>
                    <ul className="list-unstyled">
                      <li><a href="#" className="dropdown-item">Your Account</a></li>
                      <li><a href="#" className="dropdown-item">Your Orders</a></li>
                      <li><a href="#" className="dropdown-item">Your Wish List</a></li>
                    </ul>
                  </div>
                </div>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <small>Returns</small>
                <br />
                <strong>& Orders</strong>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#">
                <i className="bi bi-cart-fill fs-5 me-1"></i>
                <strong>Cart</strong>
                <span className="cart-badge ms-1">{cartCount}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar