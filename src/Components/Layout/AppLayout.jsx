import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Outlet, useLocation } from 'react-router-dom'

const AppLayout = () => {
    const location = useLocation()
  const isHomeOrArtists = location.pathname === '/' || location.pathname === '/Artists';

return (
<>
<Navbar transparent={isHomeOrArtists}  />
<div style={{ minHeight: 'calc(100vh - 120px)' }}>
        <Outlet />
      </div>
<Footer/>
</>
)
}
export default AppLayout
