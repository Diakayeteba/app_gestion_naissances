import React from 'react'
import { Outlet } from 'react-router'

function PrivateLayout() {
  return (
   <section>
    <Outlet/>
   </section>
  )
}

export default PrivateLayout