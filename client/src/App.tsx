import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SearchContent from './components/SearchContent'

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <SearchContent />
      <Footer />
    </div>
  )
}

export default App
