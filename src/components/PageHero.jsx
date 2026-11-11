export default function PageHero({
  eyebrow = 'FRERA GROUP OF INDUSTRIES',
  title,
  description,
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="text-info fw-bold small text-uppercase">{eyebrow}</span>
        <h1 className="mt-3 mb-3">{title}</h1>
        <p className="mb-0 col-lg-7 text-white-50 fs-5">{description}</p>
      </div>
    </section>
  )
}
