import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import Login from './pages/Login'
import UrunKayit from './pages/UrunKayit'
import Urunler from './pages/Urunler'
import UrunDetay from './pages/UrunDetay'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <nav><Navbar/></nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='products' element={<Products />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<Error />} />
      <Route path='urun-kayit' element={<UrunKayit />} />
      <Route path='urunler' element={<Urunler />} />
      <Route path="urunler/:productId" element={<UrunDetay />} />

    </Routes>
    <footer>Footer</footer>
   </>
  )
}
export default App
