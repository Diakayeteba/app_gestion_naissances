
import { Outlet } from 'react-router'

function PrivateLayout() {
  return (
   <section>
    Private layout
    <Outlet/>
    
   </section>
  )
}

export default PrivateLayout