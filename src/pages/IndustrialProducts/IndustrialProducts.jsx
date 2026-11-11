import ProductCategoryPage from '../../components/ProductCategoryPage'

export default function IndustrialProducts() {
  return <ProductCategoryPage page={industrialPage} />
}

const industrialPage = {
  path: '/industrial-products',
  category: 'Industrial Products',
  shortLabel: 'industrial products',
  eyebrow: 'FRERA INDUSTRIAL',
  title: 'The right supply',
  highlight: 'starts here.',
  icon: 'bi-gear-wide-connected',
  image:
    'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1900&q=90',
  description:
    'Explore industrial machinery, tools, equipment and material enquiries. Share your specifications and quantity so our team can understand your business requirement.',
  highlights: ['Machinery & equipment', 'Tools & components', 'Industrial materials'],
  cardTitle: 'Tell us what your operation needs.',
  cardDescription:
    'Share the product type, specifications and quantity. Our team can help direct your industrial product enquiry.',
  benefits: [
    { icon: 'bi-gear', title: 'Specify the product', text: 'Tell us the machine, equipment or material you need.' },
    { icon: 'bi-card-list', title: 'Share requirements', text: 'Include specifications, quantity and intended use.' },
    { icon: 'bi-headset', title: 'Get enquiry support', text: 'Discuss the details with the FRERA team.' },
  ],
  typesEyebrow: 'INDUSTRIAL RANGE',
  typesTitle: 'What does your business need?',
  typesDescription:
    'Describe the product or supply requirement and share the specifications that matter to your work.',
  types: [
    { icon: 'bi-gear-wide-connected', title: 'Machinery & equipment', text: 'Enquire about industrial machinery, production equipment and related needs.' },
    { icon: 'bi-tools', title: 'Tools & components', text: 'Share the tools, parts or components required for your operation.' },
    { icon: 'bi-boxes', title: 'Steel & raw materials', text: 'Discuss material type, grade, quantity and delivery requirements.' },
  ],
  listingsEyebrow: 'FEATURED PRODUCTS',
  listingsTitle: 'Explore industrial opportunities',
  listingsDescription: 'Browse industrial products currently featured by FRERA, or contact us with a specific requirement.',
  emptyTitle: 'Looking for a particular industrial product?',
  emptyDescription: 'Send us the product specifications and quantity. Our team can help direct your enquiry.',
  processTitle: 'A practical way to start',
  processDescription: 'A few key details help our team understand your industrial requirement.',
  steps: [
    { number: '01', icon: 'bi-gear', title: 'Describe the product', text: 'Tell us the machinery, tools, equipment or material you need.' },
    { number: '02', icon: 'bi-card-checklist', title: 'Share specifications', text: 'Include model, grade, dimensions or other relevant requirements.' },
    { number: '03', icon: 'bi-chat-square-text', title: 'Discuss the next step', text: 'Connect with our team to talk about availability and your enquiry.' },
  ],
  ctaTitle: 'Have an industrial supply requirement?',
  ctaDescription: 'Share your product specifications and quantity with the FRERA team.',
}
