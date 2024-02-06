import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div >
        {children}
      </div>
      <Footer />
    </div>
  )
}


