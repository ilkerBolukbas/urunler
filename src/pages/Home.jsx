import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      
      <section className='section'>
        <Outlet />
      </section>
    </>
  )
}
export default Home