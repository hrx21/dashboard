import { useState } from "react";
import  {Link}  from 'react-router-dom';


const SidebarItems = ({ item, size }) => {
    const [dropdown, setDropdown] = useState(false);
    return (
      <div className="text-sm text-white h-full">
        <div
          onClick={() => setDropdown(!dropdown)}
          className={`${
             item.link }`}
        >
          <div className="flex justify-center items-center px-4 flex-row flex-1 hover:text-cyan-800 hover:border-r-4 hover:border-solid hover:border-cyan-800">
            <div className="flex-1">
            {item.icon}
            </div>
            {item.dropdown ? (
              <span style={{display: size ? "block": "none"}}  className="cursor-pointer flex justify-center flex-1 items-center">{item.title}</span>
            ) : (
              <Link style={{display: size ? "block": "none"}}  href={item.link}>
                <span className="cursor-pointer flex justify-center flex-1 items-center">{item.title}</span>
              </Link>
            )}
            <p style={{display: size ? "block": "none"}}> {item.icon1}</p>
          </div>
          <div className="">
            {item.dropdown && (
              <i
                className={`${
                  !dropdown ? "fa-solid fa-caret-down" : "fa-solid fa-caret-up"
                } ml-1`}
              ></i>
            )}
          </div>
        </div>
        <div className="ml-3">
          {dropdown &&
            item.dropdown &&
            item.dropdown.map((i, index) => {
              return (
                <li
                  className={`${
                     i.link
                  } py-2 px-4 rounded-full flex items-center hover:bg-cyan-900`}
                  key={index}
                >
                  <Link className="flex flex-row" href={i.link}>
                    <p style={{display: size ? "block": "none"}}  className={`ml-2`}>{i.title}</p>
                    {i.icon}
                  </Link>
                </li>
              );
            })}
        </div>
      </div>
    );
  };
  export default SidebarItems;