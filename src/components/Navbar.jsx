import { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Collapse from 'bootstrap/js/dist/collapse'

const navClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`

export default function Navbar() {
  const navRef = useRef(null)
  const { pathname } = useLocation()

  function closeNav() {
    if (navRef.current?.classList.contains('show')) {
      Collapse.getOrCreateInstance(navRef.current).hide()
    }
  }

  useEffect(() => {
    closeNav()
  }, [pathname])

  return (
    <>
      <div className="top-strip">
        <div className="container d-flex justify-content-between">
          <span>
            <i className="bi bi-envelope me-2" />
            Contact FRERA Group of Industries
          </span>
          <span className="contact-extra">
            <i className="bi bi-telephone me-2" />
            Call us for product enquiries
          </span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg site-navbar sticky-top">
        <div className="container">
          <Link className="navbar-brand brand-mark" to="/" onClick={closeNav}>
            FRERA
            <small>GROUP OF INDUSTRIES</small>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#freraNav"
            aria-controls="freraNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="freraNav" ref={navRef}>
            <div className="navbar-nav mx-auto">
              <NavLink end to="/" className={navClass} onClick={closeNav}>
                Home
              </NavLink>
              <NavLink to="/about" className={navClass} onClick={closeNav}>
                About Us
              </NavLink>

              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#products"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Products
                </a>
                <ul className="dropdown-menu border-0 shadow">
                  <li>
                    <Link className="dropdown-item" to="/property" onClick={closeNav}>
                      House & Property
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/vehicles" onClick={closeNav}>
                      Cars & Vehicles
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/scrap-metals" onClick={closeNav}>
                      Scrap & Metals
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/industrial-products" onClick={closeNav}>
                      Industrial Products
                    </Link>
                  </li>
                </ul>
              </div>

              <NavLink to="/services" className={navClass} onClick={closeNav}>
                Services
              </NavLink>
              <NavLink to="/contact" className={navClass} onClick={closeNav}>
                Contact
              </NavLink>
            </div>

            <Link to="/contact" className="btn btn-frera" onClick={closeNav}>
              Get in Touch <i className="bi bi-arrow-up-right ms-1" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
