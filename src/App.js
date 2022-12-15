import { Link, Route, Routes } from 'react-router-dom';
import Sidebar from './home/sidebar';
import Home from './pages/home';
import About from './pages/about';
// import SwipeableTemporaryDrawer from './pages/sidebar';
// import Sidebar from './pages/sidebar';


function App() {
  return (
    <>
    <div>
      <div className=''>
        <nav className='w-full bg-[#1c2b36] flex px-10 h-[60px] fixed'>
          <span className='text-teal-600 flex flex-1 flex-row items-center text-2xl'>Blur<p className='m-0 text-white'>Admin</p></span>
        </nav>
        <Sidebar/>
      </div>
    </div>
     <Routes> 
       <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/> 
    </Routes>
    </>
  );
}

export default App;
