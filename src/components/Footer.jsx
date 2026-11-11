import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 pb-4">
          <div className="col-lg-4">
            <div className="brand-mark text-white">
              FRERA
              <small>GROUP OF INDUSTRIES</small>
            </div>
            <p className="mt-4 pe-lg-5">
              A multi-category business platform connecting enquiries across
              property, vehicles, metals and industrial products.
            </p>
          </div>

          <div className="col-6 col-lg-2">
            <h5>Quick Links</h5>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-6 col-lg-3">
            <h5>Categories</h5>
            <Link to="/property">House & Property</Link>
            <Link to="/vehicles">Cars & Vehicles</Link>
            <Link to="/scrap-metals">Scrap & Metals</Link>
            <Link to="/industrial-products">Industrial Products</Link>
          </div>

          <div className="col-lg-3">
            <h5>Contact</h5>
            <p>
              <i className="bi bi-geo-alt me-2" />
              Delhi NCR, India
            </p>
            <p>
              <i className="bi bi-envelope me-2" />
              Add your business email
            </p>
            <p>
              <i className="bi bi-telephone me-2" />
              Add your phone number
            </p>
          </div>
        </div>

        <hr className="border-light opacity-25" />

        <div className="d-flex flex-column flex-md-row justify-content-between gap-2 small">
          <span>
            © {new Date().getFullYear()} FRERA Group of Industries. All rights
            reserved.
          </span>
          <span>Buy • Sell • Grow Together</span>
        </div>
      </div>
    </footer>
  )
}
