import { Link, Route, Routes } from 'react-router-dom';
import Sidebar from './home/sidebar';
import Home from './pages/home';
import About from './pages/mail';
import Chart from './pages/chart'
import Map from './pages/map'
import Page from './pages/page'
import Feature from './pages/ui-feature'
import MenuIcon from '@mui/icons-material/Menu';
// import SwipeableTemporaryDrawer from './pages/sidebar';
// import Sidebar from './pages/sidebar';
import {useState} from 'react'



function App() {

  return (
    <div>
        <nav className='w-full bg-[#1c2b36] flex px-10 h-[60px] sticky top-0'>
          <span className='text-teal-600 flex flex-1 flex-row items-center text-2xl'>Blur<p className='m-0 text-white'>Admin</p>
           {/* <MenuIcon  className='ml-5 hover:text-yellow-400 cursor-pointer text-white'/>  */}
           </span>
        </nav>
        <div className="flex">
        <Sidebar
         />
      <Routes> 
            <Route path='/' element={<Home/>}/>
            <Route path='/pages/mail' element={<About/>}/> 
            <Route path='/pages/chart' element={<Chart/>}/> 
            <Route path='/pages/map' element={<Map/>}/> 
            <Route path='/pages/page' element={<Page/>}/> 
            <Route path='/pages/ui-feature' element={<Feature/>}/> 
     </Routes>
     {/* </Sidebar> */}
      </div>
    
    </div>
  );
}

export default App;
