import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'
import Search from './components/search/Search'

function App() {
  return (
    <div className='app-container'>
      <Navbar/>
      <Search/>
      <Footer/>
    </div>
  )
}

export default App
