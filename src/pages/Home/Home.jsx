import { Link } from 'react-router-dom'
import SectionHeading from '../../components/SectionHeading'
import CategoryCard from '../../components/CategoryCard'
import ProductCard from '../../components/ProductCard'
import { categories, products, benefits } from '../../data/siteData'
import './Home.css'

export default function Home() {
  const categoryPaths = {
    Property: '/property',
    Vehicles: '/vehicles',
    'Scrap & Metals': '/scrap-metals',
    'Industrial Products': '/industrial-products',
  }
  const featuredCategories = [
    ...new Set(products.map((item) => item.category)),
  ].map((category) => ({
    name: category,
    path: categoryPaths[category],
    items: products
      .filter((item) => item.category === category)
      .slice(0, 2),
  }))

  return (
    <>
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-7 py-5">
              <span className="hero-label">
                <i className="bi bi-stars me-2" />
                A MULTI-CATEGORY BUSINESS PLATFORM
              </span>
              <h1 className="display-3 fw-bold text-white mt-4">
                Buy. Sell.
                <br />
                <span>Grow Together.</span>
              </h1>
              <p className="text-white-50 fs-5 col-lg-10 mt-3">
                Discover opportunities across property, vehicles, scrap, metals
                and industrial products with FRERA Group of Industries.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link
                  to="/contact"
                  className="btn btn-light rounded-pill px-4 py-3 fw-bold"
                >
                  Explore Opportunities
                  <i className="bi bi-arrow-right ms-2" />
                </Link>
                <Link
                  to="/services"
                  className="btn btn-outline-light rounded-pill px-4 py-3 fw-bold"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              <div className="hero-note">
                <div className="icon-circle mb-3">
                  <i className="bi bi-building" />
                </div>
                <h4 className="fw-bold text-white">
                  One Group. Multiple Opportunities.
                </h4>
                <p className="text-white-50 mb-0">
                  A single point of contact for diverse buying, selling and
                  supply enquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionHeading
            eyebrow="Explore our range"
            title="Browse by category"
            text="Find the right category for your requirement, from property and vehicles to metals and industrial supplies."
            centered
          />
          <div className="row g-4 mt-2">
            {categories.map((item) => (
              <div className="col-sm-6 col-lg-3" key={item.title}>
                <CategoryCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space home-offerings">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3">
            <SectionHeading
              eyebrow="Featured opportunities"
              title="A little of everything, all in one place"
              text="Explore a selection from every FRERA category. Choose a product for its details, or visit a category to see the complete range."
            />
            <Link to="/contact" className="btn btn-outline-frera mb-4">
              Make an enquiry
            </Link>
          </div>
          <div className="home-product-groups">
            {featuredCategories.map((group) => (
              <section className="home-product-group" key={group.name}>
                <div className="home-product-group-heading">
                  <div>
                    <span className="section-kicker">Explore category</span>
                    <h3>{group.name}</h3>
                  </div>
                  <Link to={group.path} className="home-category-link">
                    View all {group.name.toLowerCase()}
                    <i className="bi bi-arrow-up-right ms-2" />
                  </Link>
                </div>
                <div className="row g-4">
                  {group.items.map((item) => (
                    <div className="col-md-6" key={item.slug}>
                      <ProductCard item={item} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
            {featuredCategories.length === 0 && (
              <div className="home-featured-empty">
                Product listings are being updated. Contact our team to share
                your requirements.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              {/* About section image: replace the src URL to use a different image. */}
              <img
                className="img-fluid rounded-4 shadow"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85"
                alt="Modern commercial building"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <SectionHeading
                eyebrow="About FRERA"
                title="Business connections built around opportunity"
                text="FRERA Group of Industries brings multiple product and service categories together under one business identity. We aim to make it easier for customers to share requirements and connect with the right team."
              />
              <Link to="/about" className="btn btn-frera">
                Know More About Us
                <i className="bi bi-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-light">
        <div className="container">
          <SectionHeading
            eyebrow="Why choose us"
            title="A straightforward way to connect"
            centered
          />
          <div className="row g-4 mt-2">
            {benefits.map(([icon, title, text]) => (
              <div className="col-md-4" key={title}>
                <div className="surface-card p-4">
                  <div className="icon-circle mb-3">
                    <i className={`bi ${icon}`} />
                  </div>
                  <h3 className="h5 card-title">{title}</h3>
                  <p className="section-copy mb-0">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-4">
          <div>
            <span className="text-info fw-bold small">
              LET'S WORK TOGETHER
            </span>
            <h2 className="text-white fw-bold mt-2 mb-2">
              Have a product or business enquiry?
            </h2>
            <p className="text-white-50 mb-0">
              Tell us what you are looking for. Our team will help direct your
              enquiry.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn btn-light rounded-pill px-4 py-3 fw-bold"
          >
            Contact FRERA
            <i className="bi bi-arrow-right ms-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
