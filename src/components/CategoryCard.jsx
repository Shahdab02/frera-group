import { Link } from 'react-router-dom'
import CatalogImage from './CatalogImage'

export default function CategoryCard({ item }) {
  return (
    <Link to={item.path} className="surface-card category-card d-block">
      {/* Category image URLs are listed in src/data/siteData.js. */}
      <CatalogImage
        src={item.image}
        alt={item.title}
        category={item.title}
        className="category-image"
      />

      <div className="card-content">
        <div className="icon-circle mb-3">
          <i className={`bi ${item.icon}`} />
        </div>

        <h3 className="h5 card-title">{item.title}</h3>
        <p className="section-copy mb-3">{item.text}</p>

        <span className="fw-bold text-primary">
          Explore category
          <i className="bi bi-arrow-right ms-1" />
        </span>
      </div>
    </Link>
  )
}
