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
import { MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Dropdwn from '../reusable/dropdown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SidebarItems from './sidebar-items';

const Sidebar = ({ children }) => {
  const [size, setSize] = useState(false);
  const toggle = () => setSize(!size)
  const [dropdown, setDropDown] = useState(false);

  const items = [
    {
      title: 'Dashboard',
      icon: <HomeIcon/>,
      link: '/',
    },
    {
      title: 'Components',
      icon: <SettingsIcon/>,
      icon1: <ArrowDropDownIcon/>,
      link: '/pages/about',
      dropdown: [
        {
          icon: <ArrowDropUpIcon/>,
          title: 'Mail',
        },
        {
          icon: <ArrowDropUpIcon/>,
          title: 'Timeline',
        },
        {
          icon: <ArrowDropUpIcon/>,
          title:'Tree View'
        }
      ]
    },
    {
      title: 'Charts',
      icon: <BarChartIcon/>,
      icon1: <ArrowDropDownIcon/>,
      link: '/pages/chart',
      dropdown: [
        {
          icon: <ArrowDropUpIcon/>,
          title: 'amCharts',
        },
        {
          icon: <ArrowDropUpIcon/>,
          title: 'Chartist',
        },
        {
          icon: <ArrowDropUpIcon/>,
          title:'Chart.js'
        },
        {
          icon: <ArrowDropUpIcon/>,
          title:'Morris'
        }
      ]
    },
    {
      title: 'UI Features',
      icon: <LaptopMacIcon/>,
      icon1: <ArrowDropDownIcon/>,
      link: '/pages/feature',
      dropdown: [
        {
          icon: <ArrowDropUpIcon/>,
          title: 'Typography',
        },
        {
          icon: <ArrowDropUpIcon/>,
          title: 'Buttons',
        },
        {
          icon: <ArrowDropUpIcon/>,
          title:'Icons'
        },
        {
          icon: <ArrowDropUpIcon/>,
          title:'Modals'
        },
        {
          icon: <ArrowDropUpIcon/>,
          title:'Grid'
        },
        {
          icon: <ArrowDropUpIcon/>,
          title:'Alerts'
        },
        {
          icon: <ArrowDropUpIcon/>,
          title:'Progress Bars'
        },
        {
          icon: <ArrowDropUpIcon/>,
          title:'Notifications'
        },
        {
          icon: <ArrowDropUpIcon/>,
          title:'Tabs & Accordions'
        },
        {
          icon: <ArrowDropUpIcon/>,
          title:'Sliders'
        },
        {
          icon: <ArrowDropUpIcon/>,
          title:'Panels'
        }
      ]
    },
    {
      title: 'Form Elements',
      icon: <NoteAltIcon/>,
      icon1: <ArrowDropDownIcon/>,
      link: '/pages/form',
      dropdown : [
          {
            icon: <ArrowDropUpIcon/>,
            title: 'Form Inputs',
          }, {
            icon: <ArrowDropUpIcon/>,
            title: 'Form Layouts',
          }, {
            icon: <ArrowDropUpIcon/>,
            title: 'Form Wizard',
          },
      ]
    },
    {
      title: 'Tables',
      icon: <TableViewIcon/>,
      icon1: <ArrowDropDownIcon/>,
      link: '/pages/table',
      dropdown: [
          {
            icon: <ArrowDropUpIcon/>,
            title: 'Basic Tables',
          },
          {
            icon: <ArrowDropUpIcon/>,
            title: 'Smart Tables',
          },
      ]
    },
    {
      title: 'Maps',
      icon: <LocationOnIcon/>,
      icon1: <ArrowDropDownIcon/>,
      link: '/pages/map',
      dropdown : [
        {
          icon: <ArrowDropUpIcon/>,
          title: 'Google Maps',
        },
        {
          icon: <ArrowDropUpIcon/>,
          title: 'Leaflet Maps',
        },
        {
          icon: <ArrowDropUpIcon/>,
          title: 'Bubble Maps',
        },
        {
          icon: <ArrowDropUpIcon/>,
          title: 'Line Maps',
        },
      ]
    },
    {
      title: 'Pages',
      icon: <DescriptionIcon/>,
      icon1: <ArrowDropDownIcon/>,
      link: '/pages/page',
      dropdown: [
        {
          icon: <ArrowDropUpIcon/>,
          title: 'Sign In',
        },
        {
          icon: <ArrowDropUpIcon/>,
          title: 'Sign Up',
        },
        {
          icon: <ArrowDropUpIcon/>,
          title: 'User Profile',
        },
        {
          icon: <ArrowDropUpIcon/>,
          title: '404 Page',
        },
      ]
    },
    {
      title: 'Menu Level 1',
      icon: <MoreHorizIcon/>,
      icon1: <ArrowDropDownIcon/>,
      link: '/pages/menu',
      dropdown : [
        {
          icon: <ArrowDropUpIcon/>,
          title: 'Menu Level 1.1',
        },
        {
          icon: <ArrowDropUpIcon/>,
          title: 'Menu Level 1.2',
        },
      ]
    },
  ]

  return ( 
    
    // <div className={`bg-[#1c2b36] w-[${size}%] text-xs h-screen m-0`}>
      <div style={{width: size ? '200px' :'50px'}} className='bg-[#1c2b36] text-xs h-screen m-0 top-0'> 
         <div className='flex flex-col'>
          <div className='flex flex-1 justify-start items-start'><button className='text-white ml-4 hover:text-yellow-400' onClick={()=>toggle()}><MenuIcon/></button></div>
         {items.map((item)=> {
          return <SidebarItems size={size} item={item} />;
        //   return <Link to={ind.link} activeclassName='active' className='flex cursor-pointer py-2 text-white hover:text-[#59768b] hover:delay-75 hover:border-r-4 hover:border-solid hover:border-[#718a9b]'>
        //   <p className='px-4'>{ind.icon}</p>
        //   {ind.title}
        //   <p className='flex flex-1 justify-end flex-row items-end pb-2 text-xs'>{ind.icon1}</p>
        // </Link>
      })}  
   </div>
<main>{children}</main>
    </div>
   );
}
 
export default Sidebar;