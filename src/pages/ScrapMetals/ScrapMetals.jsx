import ProductCategoryPage from '../../components/ProductCategoryPage'

export default function ScrapMetals() {
  return <ProductCategoryPage page={scrapPage} />
}

const scrapPage = {
  path: '/scrap-metals',
  category: 'Scrap & Metals',
  shortLabel: 'metals',
  eyebrow: 'FRERA SCRAP & METALS',
  title: 'Metal enquiries,',
  highlight: 'made clear.',
  icon: 'bi-recycle',
  image:
    'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=1900&q=90',
  description:
    'Connect with our team about ferrous and non-ferrous scrap or bulk metal requirements. Share the material, grade, quantity and location to help us understand your enquiry.',
  highlights: ['Ferrous materials', 'Non-ferrous metals', 'Bulk enquiries'],
  cardTitle: 'Start with the material details.',
  cardDescription:
    'Tell us what metal you need or have, along with grade, quantity and location, so we can understand your requirement.',
  benefits: [
    { icon: 'bi-chat-dots', title: 'Describe the material', text: 'Share the metal type and grade you are enquiring about.' },
    { icon: 'bi-box-seam', title: 'Include the quantity', text: 'Let us know the approximate volume or lot size.' },
    { icon: 'bi-geo-alt', title: 'Add your location', text: 'Include where the material is located or needed.' },
  ],
  typesEyebrow: 'METAL CATEGORIES',
  typesTitle: 'Tell us which materials you need',
  typesDescription:
    'A clear material description helps our team understand your scrap or bulk metal enquiry.',
  types: [
    { icon: 'bi-bricks', title: 'Iron & steel', text: 'Enquire about ferrous metal and iron or steel scrap requirements.' },
    { icon: 'bi-recycle', title: 'Brass & copper', text: 'Share the grade and quantity for brass or copper enquiries.' },
    { icon: 'bi-boxes', title: 'Aluminium & bulk lots', text: 'Discuss aluminium and other bulk material requirements.' },
  ],
  listingsEyebrow: 'FEATURED MATERIAL',
  listingsTitle: 'Explore metal opportunities',
  listingsDescription: 'Browse material listings currently featured by FRERA. Confirm grade, quantity and availability with our team.',
  emptyTitle: 'Need a specific metal or material?',
  emptyDescription: 'Send us the material type, grade, quantity and location to start your enquiry.',
  processTitle: 'Make your material enquiry count',
  processDescription: 'Share the key details so the team can better understand what you need.',
  steps: [
    { number: '01', icon: 'bi-tags', title: 'Identify the material', text: 'Tell us the metal type, grade or material specification.' },
    { number: '02', icon: 'bi-box-seam', title: 'Share quantity & location', text: 'Include the amount and where it is available or required.' },
    { number: '03', icon: 'bi-chat-square-text', title: 'Discuss the enquiry', text: 'Connect with our team to confirm details and possible next steps.' },
  ],
  ctaTitle: 'Have a scrap or metals requirement?',
  ctaDescription: 'Share your material, quantity and location with the FRERA team.',
}
