import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Product</Link>
      <Link to='/login'>Login</Link>
      <Link to='/urun-kayit'>Ürün Kayıt</Link>
      <Link to='/Urunler' >Ürünler</Link>
    </nav>
  )
}
export default Navbar
