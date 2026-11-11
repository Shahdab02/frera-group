export default function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <div
      className={`${centered ? 'text-center mx-auto' : ''} mb-4`}
      style={{ maxWidth: centered ? 720 : 'none' }}
    >
      <div className="section-kicker mb-2">{eyebrow}</div>
      <h2 className="section-heading">{title}</h2>
      {text && <p className="section-copy mb-0">{text}</p>}
    </div>
  )
}
