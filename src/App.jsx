import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Property from './pages/Property/Property'
import Vehicles from './pages/Vehicles/Vehicles'
import ScrapMetals from './pages/ScrapMetals/ScrapMetals'
import IndustrialProducts from './pages/IndustrialProducts/IndustrialProducts'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import ProductDetails from './pages/ProductDetails/ProductDetails'

function NotFound() {
  return (
    <div className="container section-space text-center">
      <h1>Page not found</h1>
      <a className="btn btn-frera mt-3" href="/">
        Back to home
      </a>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="property" element={<Property />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="scrap-metals" element={<ScrapMetals />} />
        <Route path="industrial-products" element={<IndustrialProducts />} />
        <Route path="products/:slug" element={<ProductDetails />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
