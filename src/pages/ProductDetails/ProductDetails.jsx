import { Link, useParams } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import ProductCard from '../../components/ProductCard'
import CatalogImage from '../../components/CatalogImage'
import { products } from '../../data/siteData'
import './ProductDetails.css'

export default function ProductDetails() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return (
      <div className="container section-space text-center">
        <span className="section-kicker">Product listing</span>
        <h1 className="section-heading mt-2">This listing is unavailable</h1>
        <p className="section-copy">
          It may have been updated or removed. Browse our current opportunities.
        </p>
        <Link to="/" className="btn btn-frera mt-2">
          Back to home
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug)

  return (
    <>
      <PageHero
        eyebrow={product.category}
        title={product.title}
        description={`${product.detail} · ${product.location}`}
      />

      <section className="section-space product-detail-section">
        <div className="container">
          <nav aria-label="Breadcrumb" className="product-breadcrumb mb-4">
            <Link to="/">Home</Link>
            <i className="bi bi-chevron-right" />
            <Link to={product.category === 'Vehicles' ? '/vehicles' : '/contact'}>
              {product.category}
            </Link>
            <i className="bi bi-chevron-right" />
            <span aria-current="page">{product.title}</span>
          </nav>

          <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-7">
              <div className="product-detail-image-wrap">
                <CatalogImage
                  className="product-detail-image"
                  src={product.image}
                  alt={product.title}
                  category={product.category}
                  loading="eager"
                />
                <span className="product-image-label">
                  <i className="bi bi-patch-check me-2" />
                  FRERA opportunity
                </span>
              </div>

              <div className="product-overview mt-4 mt-lg-5">
                <span className="section-kicker">Overview</span>
                <h2 className="section-heading mt-2">About this listing</h2>
                <p className="section-copy mb-0">{product.description}</p>
              </div>
            </div>

            <div className="col-lg-5">
              <aside className="product-enquiry-card">
                <span className="tag">{product.category}</span>
                <h2 className="h3 card-title mt-3">{product.title}</h2>
                <p className="section-copy d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt-fill product-location-icon" />
                  {product.location}
                </p>

                <div className="product-facts">
                  <div>
                    <span>Category</span>
                    <strong>{product.category}</strong>
                  </div>
                  <div>
                    <span>Location</span>
                    <strong>{product.location}</strong>
                  </div>
                  <div>
                    <span>Price & availability</span>
                    <strong>Confirm with our team</strong>
                  </div>
                </div>

                <p className="product-trust-note">
                  <i className="bi bi-info-circle me-2" />
                  Ask us for the latest verified specifications, pricing and
                  availability for this listing.
                </p>

                <Link
                  to={`/contact?product=${encodeURIComponent(product.title)}&category=${encodeURIComponent(product.category)}`}
                  className="btn btn-frera w-100"
                >
                  Enquire about this listing
                  <i className="bi bi-arrow-right ms-2" />
                </Link>
                <Link to="/contact" className="product-contact-link">
                  Speak with our team
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="section-space bg-light">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
              <div>
                <span className="section-kicker">Discover more</span>
                <h2 className="section-heading mt-2 mb-0">
                  More opportunities
                </h2>
              </div>
              <Link to="/" className="btn btn-outline-frera mb-1">
                Browse all
              </Link>
            </div>
            <div className="row g-4">
              {relatedProducts.map((item) => (
                <div className="col-md-6 col-lg-4" key={item.slug}>
                  <ProductCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
