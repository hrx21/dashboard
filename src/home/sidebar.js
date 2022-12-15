import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import TableViewIcon from '@mui/icons-material/TableView';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import  {Link}  from 'react-router-dom';
import {useState} from 'react'

const Sidebar = () => {


  const [size, setSize] = useState(13);

  const items = [
    {
      title: 'Dashboard',
      icon: <HomeIcon/>,
      link: '/'
    },
    {
      title: 'Components',
      icon: <SettingsIcon/>,
      link: '/pages/about'
    },
    {
      title: 'Charts',
      icon: <BarChartIcon/>,
      link: '/pages/chart'
    },
    {
      title: 'UI Features',
      icon: <LaptopMacIcon/>,
      link: '/pages/feature'
    },
    {
      title: 'Form Elements',
      icon: <NoteAltIcon/>,
      link: '/pages/form'
    },
    {
      title: 'Tables',
      icon: <TableViewIcon/>,
      link: '/pages/table'
    },
    {
      title: 'Maps',
      icon: <LocationOnIcon/>,
      link: '/pages/map'
    },
    {
      title: 'Pages',
      icon: <DescriptionIcon/>,
      link: '/pages/page'
    },
    {
      title: 'Menu Level 1',
      icon: <MoreHorizIcon/>,
      link: '/pages/menu'
    },
  ]

  return ( 
    
    <div className={`bg-[#1c2b36] w-[${size}%] flex items-start text-xs h-screen m-0`}>
         <div className='flex flex-col'>
         {items.map((ind)=> {
          return <Link to={ind.link} className='flex cursor-pointer py-2 text-white'>
          <p className='px-4 text-xs'>{ind.icon}</p>
          {ind.title}
        </Link>
      })}  
      <button onClick={()=>setSize(2)}>ffff</button> 
   </div>

    </div>
   );
}
 
export default Sidebar;