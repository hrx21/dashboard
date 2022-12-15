import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import TableViewIcon from '@mui/icons-material/TableView';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import  Link  from 'react-router-dom';

const Sidebar = () => {

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
      link: ''
    },
    {
      title: 'UI Features',
      icon: <LaptopMacIcon/>,
      link: ''
    },
    {
      title: 'Form Elements',
      icon: <NoteAltIcon/>,
      link: ''
    },
    {
      title: 'Tables',
      icon: <TableViewIcon/>,
      link: ''
    },
    {
      title: 'Maps',
      icon: <LocationOnIcon/>,
      link: ''
    },
    {
      title: 'Pages',
      icon: <DescriptionIcon/>,
      link: ''
    },
    {
      title: 'Menu Level 1',
      icon: <MoreHorizIcon/>,
      link: ''
    },
  ]

  return ( 
    <div className="bg-[#1c2b36] w-[13%] flex items-start text-xs h-screen">
         <div className='flex pt-16 flex-col'>
         {items.map((ind)=> {
          return <div className='flex cursor-pointer py-2 text-white'>
          <p className='px-4 text-xs'>{ind.icon}</p>
          {ind.title}
        </div>
      })}   
   </div>

    </div>
   );
}
 
export default Sidebar;