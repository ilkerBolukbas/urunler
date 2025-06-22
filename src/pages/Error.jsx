import React from 'react'

const Error = () => {
  return (
   <section className='section'>
      <h2>404</h2>
      <p>Sayfa bulunamadı</p>
      <Link to='/' className='btn'>
        Ana sayfa
      </Link>
    </section>
  )
}

export default Error