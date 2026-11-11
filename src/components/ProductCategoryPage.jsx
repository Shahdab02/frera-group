import { Link } from 'react-router-dom'
import CategoryCard from './CategoryCard'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'
import { categories, products } from '../data/siteData'

export default function ProductCategoryPage({ page }) {
  const listings = products.filter((item) => item.category === page.category)
  const otherCategories = categories.filter(
    (item) => item.path !== page.path,
  )

  return (
    <main className="product-category-page">
      <section
        className="category-landing-hero"
        style={{ '--category-hero-image': `url("${page.image}")` }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="category-hero-label">
                <i className={`bi ${page.icon} me-2`} />
                {page.eyebrow}
              </span>
              <h1 className="category-hero-title">
                {page.title}
                <span>{page.highlight}</span>
              </h1>
              <p className="category-hero-copy">{page.description}</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a
                  href="#category-listings"
                  className="btn btn-light btn-lg rounded-pill px-4"
                >
                  Explore {page.shortLabel}
                  <i className="bi bi-arrow-down ms-2" />
                </a>
                <Link
                  to={`/contact?category=${encodeURIComponent(page.category)}`}
                  className="btn btn-outline-light btn-lg rounded-pill px-4"
                >
                  Share your requirement
                  <i className="bi bi-arrow-up-right ms-2" />
                </Link>
              </div>
              <div className="category-hero-points">
                {page.highlights.map((highlight) => (
                  <span key={highlight}>
                    <i className="bi bi-check-circle-fill" />
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-lg-5">
              <div className="category-hero-card">
                <span className="category-hero-card-icon">
                  <i className={`bi ${page.icon}`} />
                </span>
                <span className="category-hero-card-eyebrow">
                  YOUR {page.shortLabel.toUpperCase()} ENQUIRY
                </span>
                <h2>{page.cardTitle}</h2>
                <p>{page.cardDescription}</p>
                <Link
                  to={`/contact?category=${encodeURIComponent(page.category)}`}
                  className="category-hero-card-link"
                >
                  Talk to our team
                  <i className="bi bi-arrow-right ms-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="category-assurance">
        <div className="container">
          <div className="row g-3">
            {page.benefits.map((benefit) => (
              <div className="col-md-4" key={benefit.title}>
                <div className="category-assurance-item">
                  <i className={`bi ${benefit.icon}`} />
                  <div>
                    <strong>{benefit.title}</strong>
                    <span>{benefit.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space category-types-section">
        <div className="container">
          <SectionHeading
            eyebrow={page.typesEyebrow}
            title={page.typesTitle}
            text={page.typesDescription}
            centered
          />
          <div className="row g-4 mt-2">
            {page.types.map((type) => (
              <div className="col-md-6 col-lg-4" key={type.title}>
                <article className="surface-card category-type-card">
                  <div className="icon-circle mb-4">
                    <i className={`bi ${type.icon}`} />
                  </div>
                  <h3 className="h5 card-title">{type.title}</h3>
                  <p className="section-copy">{type.text}</p>
                  <Link
                    to={`/contact?category=${encodeURIComponent(page.category)}&requirement=${encodeURIComponent(type.title)}`}
                    className="category-text-link"
                  >
                    Enquire about {type.title.toLowerCase()}
                    <i className="bi bi-arrow-right ms-2" />
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-space category-listings-section"
        id="category-listings"
      >
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3">
            <SectionHeading
              eyebrow={page.listingsEyebrow}
              title={page.listingsTitle}
              text={page.listingsDescription}
            />
            <span className="tag mb-4">
              {listings.length}{' '}
              {listings.length === 1 ? 'listing' : 'listings'}
            </span>
          </div>
          {listings.length > 0 ? (
            <div className="row g-4">
              {listings.map((item) => (
                <div className="col-md-6 col-lg-4" key={item.slug}>
                  <ProductCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="category-empty-state">
              <div className="icon-circle mx-auto mb-3">
                <i className={`bi ${page.icon}`} />
              </div>
              <h3 className="h5 card-title">{page.emptyTitle}</h3>
              <p className="section-copy">{page.emptyDescription}</p>
              <Link
                to={`/contact?category=${encodeURIComponent(page.category)}`}
                className="btn btn-frera"
              >
                Make an enquiry
                <i className="bi bi-arrow-right ms-2" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="section-space category-process-section">
        <div className="container">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title={page.processTitle}
            text={page.processDescription}
            centered
          />
          <div className="row g-4 mt-2">
            {page.steps.map((step) => (
              <div className="col-md-4" key={step.number}>
                <article className="category-step-card">
                  <div className="category-step-top">
                    <span>{step.number}</span>
                    <i className={`bi ${step.icon}`} />
                  </div>
                  <h3 className="h5 card-title mt-4">{step.title}</h3>
                  <p className="section-copy mb-0">{step.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space category-other-section">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3">
            <SectionHeading
              eyebrow="DISCOVER FRERA"
              title="Explore more business categories"
              text="Find more opportunities across FRERA Group of Industries."
            />
            <Link to="/" className="btn btn-outline-frera mb-4">
              Visit homepage
              <i className="bi bi-arrow-up-right ms-1" />
            </Link>
          </div>
          <div className="row g-4">
            {otherCategories.map((item) => (
              <div className="col-sm-6 col-lg-4" key={item.path}>
                <CategoryCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="category-final-cta">
        <div className="container">
          <div className="category-final-cta-inner">
            <div>
              <span>LET'S CONNECT</span>
              <h2>{page.ctaTitle}</h2>
              <p>{page.ctaDescription}</p>
            </div>
            <Link
              to={`/contact?category=${encodeURIComponent(page.category)}`}
              className="btn btn-light btn-lg rounded-pill px-4"
            >
              Contact our team
              <i className="bi bi-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
