import { Link } from 'react-router-dom'
import CatalogImage from './CatalogImage'

export default function ProductCard({ item }) {
  return (
    <article className="surface-card product-card">
      {/* Featured product image URLs are listed in src/data/siteData.js. */}
      <CatalogImage
        src={item.image}
        alt={item.title}
        category={item.category}
      />
      <div className="card-content">
        <span className="tag">{item.category}</span>
        <h3 className="h5 card-title mt-3">{item.title}</h3>
        <p className="section-copy small">
          <i className="bi bi-geo-alt me-1" />
          {item.location}
        </p>
        <p className="section-copy">{item.detail}</p>
        <Link to={`/products/${item.slug}`} className="btn btn-outline-frera btn-sm">
          View Details <i className="bi bi-arrow-up-right ms-1" />
        </Link>
      </div>
    </article>
  )
}
