import ProductCategoryPage from '../../components/ProductCategoryPage'

export default function Property() {
  return <ProductCategoryPage page={propertyPage} />
}

const propertyPage = {
  path: '/property',
  category: 'Property',
  shortLabel: 'properties',
  eyebrow: 'FRERA PROPERTY',
  title: 'Find a place to',
  highlight: 'call your own.',
  icon: 'bi-house-heart',
  image:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1900&q=90',
  description:
    'Explore residential and commercial property opportunities. Tell us what you are looking for and connect with our team to discuss the details.',
  highlights: ['Homes & apartments', 'Land & plots', 'Commercial spaces'],
  cardTitle: 'A better way to start your property search.',
  cardDescription:
    'Share your preferred property type, location and requirements. Our team can help you with the next steps.',
  benefits: [
    { icon: 'bi-chat-dots', title: 'Start with your needs', text: 'Tell us the property type and location you have in mind.' },
    { icon: 'bi-info-circle', title: 'Get clear details', text: 'Ask about the listing and the information that matters to you.' },
    { icon: 'bi-person-lines-fill', title: 'Talk to our team', text: 'Discuss your enquiry and possible next steps.' },
  ],
  typesEyebrow: 'EXPLORE PROPERTY',
  typesTitle: 'What kind of space are you looking for?',
  typesDescription:
    'From a place to live to space for your business, start with the property type that fits your plans.',
  types: [
    { icon: 'bi-house-door', title: 'Homes & apartments', text: 'Explore houses and flats for your residential property enquiry.' },
    { icon: 'bi-geo', title: 'Land & plots', text: 'Tell us about the location and type of land or plot you need.' },
    { icon: 'bi-buildings', title: 'Commercial spaces', text: 'Enquire about offices, shops, warehouses and business spaces.' },
  ],
  listingsEyebrow: 'FEATURED PROPERTY',
  listingsTitle: 'Explore property opportunities',
  listingsDescription: 'Browse property listings currently featured by FRERA and contact us for details.',
  emptyTitle: 'Looking for a particular property?',
  emptyDescription: 'Share your requirements with our team and we can help direct your property enquiry.',
  processTitle: 'A clearer path to your property enquiry',
  processDescription: 'Share what you need, get clarity on the listing and discuss how to move forward.',
  steps: [
    { number: '01', icon: 'bi-pencil-square', title: 'Share your requirements', text: 'Tell us the property type, preferred area and what you are looking for.' },
    { number: '02', icon: 'bi-card-checklist', title: 'Discuss the details', text: 'Ask about the listing and confirm relevant property information.' },
    { number: '03', icon: 'bi-arrow-left-right', title: 'Plan your next step', text: 'Connect with our team to continue the property conversation.' },
  ],
  ctaTitle: 'Ready to talk about a property?',
  ctaDescription: 'Tell us what you have in mind and our team will help direct your enquiry.',
}
