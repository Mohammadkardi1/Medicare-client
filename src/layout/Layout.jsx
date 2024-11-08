import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Header/>
      <main>
        <Routers/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
