
import { Outlet } from 'react-router'
import Nav from '../composents/nav/Nav'

function PrivateLayout() {
  return (
   <section className='border-4 border-red-700 min-h-screen '>
    <Nav/>

    <main className='wrapper pl-64 pr-4'>
      <header className='flex justify-between my-3 text-2xl front-bold'>
        <h3>Déclarations</h3>
        <span>Madou</span>
      </header>
        <Outlet/>
    </main>
   
   
    
   </section>
  );
}

export default PrivateLayout