import { useState } from 'react'

export default function Navbar({ cartCount, searchText, onSearchChange }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse container-fluid  align-items-center justify-content-between"
        id="navbarContent"
      >
        <a className="navbar-brand" href="https://www.shopindia.com" target="_blank" rel="noreferrer">
          <div className="shopindia-logo-img">
            <svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FF9500', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#FF6B35', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#1E3A8A', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1F2937', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle
                cx="75"
                cy="75"
                r="55"
                fill="url(#orangeGradient)"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}
              />
              <g transform="translate(75, 75)">
                <path
                  d="M -22 -15 L -18 -24 L 18 -24 L 22 -15 L 22 22 Q 22 28 16 28 L -16 28 Q -22 28 -22 22 Z"
                  fill="white"
                  stroke="none"
                />
                <path
                  d="M -14 -24 Q 0 -36 14 -24"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <line x1="-18" y1="-15" x2="18" y2="-15" stroke="white" strokeWidth="2.5" opacity="0.9" />
                <ellipse cx="-6" cy="4" rx="3" ry="7" fill="white" opacity="0.45" />
              </g>
              <text
                x="160"
                y="65"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="56"
                fontWeight="900"
                fill="url(#blueGradient)"
                letterSpacing="2"
              >
                SHOP
              </text>
              <text
                x="160"
                y="115"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="48"
                fontWeight="800"
                fill="#FF9500"
                letterSpacing="2"
              >
                INDIA
              </text>
              <line
                x1="160"
                y1="125"
                x2="450"
                y2="125"
                stroke="#FF9500"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.95"
              />
            </svg>
          </div>
          <div className="delivery-info">
            <small>Delivering to</small>
            <span className="fw-bold">Vadodara 390007</span>
          </div>
        </a>

        <form className="search-bar mx-3 flex-grow-1" role="search">
          <input
            type="search"
            id="search"
            placeholder="Search Shop India.in"
            aria-label="Search"
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>

        <div className="d-flex align-items-center ms-auto">
          <div className="language-selector me-2">
            <img src="https://flagcdn.com/w32/in.png" alt="India Flag" className="flag-logo" />
            <button className="dropdown-btn">IN EN</button>
            <div className="dropdown-content">
              <p><strong>CHANGE LANGUAGE</strong></p>
              <label><input type="radio" name="lang" defaultChecked /> English-EN</label>
              <label><input type="radio" name="lang" /> हिन्दी-HI</label>
              <label><input type="radio" name="lang" /> தமிழ்-TA</label>
              <label><input type="radio" name="lang" /> తెలుగు-TE</label>
              <label><input type="radio" name="lang" /> ಕನ್ನಡ-KN</label>
              <label><input type="radio" name="lang" /> മലയാളം-ML</label>
              <label><input type="radio" name="lang" /> বাংলা-BN</label>
              <label><input type="radio" name="lang" /> मराठी-MR</label>
              <div className="footer-text">
                You are Shopping on <strong>Shop India.in</strong>
                <br />
                <a href="#">Change country/region</a>
              </div>
            </div>
          </div>

          <div className="account-section me-2">
            <div className="dropdown">
              <button
                className="btn text-white dropdown-toggle"
                type="button"
                id="accountDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ lineHeight: 1.2 }}
              >
                <small>Hello, sign in</small>
                <br />
                <strong>Account & Lists</strong>
              </button>
              <ul className="dropdown-menu p-3" aria-labelledby="accountDropdown" style={{ minWidth: '420px' }}>
                <div className="text-center mb-3">
                  <button className="btn btn-warning fw-bold">Sign in</button>
                  <br />
                  <small>
                    New customer? <a href="#" className="text-primary">Start here</a>
                  </small>
                </div>
                <hr />
                <div className="row">
                  <div className="col-6">
                    <h6 className="fw-bold">Your Lists</h6>
                    <ul className="list-unstyled">
                      <li><a href="#" className="dropdown-item">Create a Wish List</a></li>
                      <li><a href="#" className="dropdown-item">Wish from Any Website</a></li>
                      <li><a href="#" className="dropdown-item">Baby Wishlist</a></li>
                      <li><a href="#" className="dropdown-item">Discover Your Style</a></li>
                      <li><a href="#" className="dropdown-item">Explore Showroom</a></li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <h6 className="fw-bold">Your Account</h6>
                    <ul className="list-unstyled">
                      <li><a href="#" className="dropdown-item">Your Account</a></li>
                      <li><a href="#" className="dropdown-item">Your Orders</a></li>
                      <li><a href="#" className="dropdown-item">Your Wish List</a></li>
                      <li><a href="#" className="dropdown-item">Your Recommendations</a></li>
                      <li><a href="#" className="dropdown-item">Your Seller Account</a></li>
                      <li><a href="#" className="dropdown-item">Manage Your Content<br />and Devices</a></li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          <div className="return-menue ms-2">
            <a href="#" className="text-white" style={{ lineHeight: 1.2 }}>
              <small>Returns</small>
              <br />
              <strong>& Orders</strong>
            </a>
          </div>

          <div className="cart ms-2">
            <a href="#" className="text-white d-flex align-items-center">
              <i className="bi bi-cart-fill fs-4 me-1"></i>
              <strong>Cart</strong>
              <span
                className="cart-count"
                style={{
                  background: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  width: '22px',
                  height: '22px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  marginLeft: '8px',
                }}
              >
                {cartCount}
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}