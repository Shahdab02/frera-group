import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a
        className="whatsapp-float"
        href="https://wa.me/910000000000"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp" />
      </a>
    </>
  )
}
