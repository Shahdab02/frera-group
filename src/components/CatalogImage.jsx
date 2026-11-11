import { useState } from 'react'

const categoryIcons = {
  Property: 'bi-house-door',
  'House & Property': 'bi-house-door',
  Vehicles: 'bi-car-front',
  'Cars & Vehicles': 'bi-car-front',
  'Scrap & Metals': 'bi-recycle',
  'Industrial Products': 'bi-gear',
}

export default function CatalogImage({
  src,
  alt,
  category,
  className = '',
  loading = 'lazy',
}) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        className={`catalog-image-fallback ${className}`}
        role="img"
        aria-label={alt}
      >
        <i
          className={`bi ${categoryIcons[category] || 'bi-image'}`}
          aria-hidden="true"
        />
        <span>{category}</span>
      </div>
    )
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
    />
  )
}
