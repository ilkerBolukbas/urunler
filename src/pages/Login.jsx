import { Link } from 'react-router-dom'


const Login = () => {
  return (
   <section className='section'>
      <h2>Hoşgeldin</h2>
      <Link to='../urun-kayit' className='btn'>
        Ürün Kayıt
      </Link>
    </section>
  )
}

export default Login