export default function PromoCards() {
  return (
    <div className="card-row">
      <div className="product-card">
        <h2>Revamp your home in style</h2>
        <div className="card-single-image">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.FzkfrNE2qbkPAEeY1SjhmwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3p"
            alt="Home decor"
          />
        </div>
        <a href="#" className="see-more">Explore all</a>
      </div>

      <div className="product-card">
        <h2>Appliances for your home</h2>
        <div className="card-grid-2x2">
          <div className="mini-card">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=115&fit=crop"
              alt="Air conditioners"
            />
            <span>Air conditioners</span>
          </div>
          <div className="mini-card">
            <img
              src="https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=200&h=115&fit=crop"
              alt="Refrigerators"
            />
            <span>Refrigerators</span>
          </div>
          <div className="mini-card">
            <img
              src="https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=200&h=115&fit=crop"
              alt="Microwaves"
            />
            <span>Microwaves</span>
          </div>
          <div className="mini-card">
            <img
              src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=200&h=115&fit=crop"
              alt="Washing machines"
            />
            <span>Washing machines</span>
          </div>
        </div>
        <a href="#" className="see-more">See more</a>
      </div>

      <div className="product-card">
        <h2>Under ₹499 | Deals on home essentials</h2>
        <div className="card-single-image">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=280&fit=crop"
            alt="Home essentials"
          />
        </div>
        <a href="#" className="see-more">See all offers</a>
      </div>

      <div className="product-card">
        <h2>Starting ₹149 | Headphones</h2>
        <div className="card-grid-2x2">
          <div className="mini-card">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=115&fit=crop"
              alt="Starting ₹149"
            />
            <span>Starting ₹149</span>
          </div>
          <div className="mini-card">
            <img
              src="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=200&h=115&fit=crop"
              alt="Up to 70% off"
            />
            <span>Up to 70% off</span>
          </div>
          <div className="mini-card">
            <img
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200&h=115&fit=crop"
              alt="Starting ₹249"
            />
            <span>Starting ₹249</span>
          </div>
          <div className="mini-card">
            <img
              src="https://images.unsplash.com/photo-1599669454699-248893623392?w=200&h=115&fit=crop"
              alt="Starting ₹649"
            />
            <span>Starting ₹649</span>
          </div>
        </div>
        <a href="#" className="see-more">See more</a>
      </div>
    </div>
  )
}