import LogoName from '../LogoName'
import {NavLink} from 'react-router-dom'
import { HomeIcon, CubeIcon, CogIcon, ChartBarIcon } from "@heroicons/react/24/outline";
function Sidebar () {

  return (
    <>
    <div className="border-r-2 h-screen p-10 w-64">
      <LogoName/>
      <div className="w-64 p-4 space-y-6 h-screen mt-10 ">
        <nav className="space-y-4 text-lg font-semibold">
                <NavLink to={"/home"}   
                className={`flex p-2 items-center space-x-2 text-gray-700` +`${({isActive})=>isActive?"active":""}`}
                >
                <HomeIcon className="h-6 w-6" />
                <span className='text-center'>Home</span>
                </NavLink>

        
        
        <NavLink to={"/quiz"} 
       className={`flex p-2 items-center space-x-2 text-gray-700 `+ `${({isActive})=>isActive?"active":""}`}
        >
          <CubeIcon className="h-6 w-6" />
          <span>Quiz</span>
        </NavLink>
        <NavLink to={"/course"} 
         className={`flex p-2 items-center space-x-2 text-gray-700  `}
        >
          <CogIcon className="h-6 w-6" />
          <span>Courses</span>
        </NavLink>
        <NavLink to={"/analytics"} 
         className={`flex p-2 items-center space-x-2 text-gray-700`}
        >
          <ChartBarIcon className="h-6 w-6" />
          <span>Analytics</span>
        </NavLink>


        <NavLink to={"/settings"} className="flex p-2 items-center space-x-2 text-gray-700 sideBar-hover">
          <CogIcon className="h-6 w-6" />
          <span>Settings</span>
        </NavLink>
      </nav>
      </div>

    </div>
    </>
  );
}

export default Sidebar;