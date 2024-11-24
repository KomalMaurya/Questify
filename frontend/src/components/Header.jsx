// import React from "react";
import {Link} from 'react-router-dom';
import icon from '/logo.svg';
const Header = () => {
    const defaultcolor="#80288b";
    const backgroundColorObject={backgroundColor:defaultcolor};
  return (
    <header>
      <div className="p-8 px-20"> 
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left mb-7 sm:mb-0">
                {/*Name of the App*/}
                <div className="flex gap-3 items-center sm:justify-start justify-center">
                    <span className="text-2xl font-light flex items-center">
                        {/* icon */}
                        <div style={backgroundColorObject} className="p-2 rounded-md mr-2.5">
                            <img src={icon} height={45} width={40}/>
                        </div>
                        {/* {Name of the app} */}
                        <span style={{color:"#80288b"}} className="font-bold text-mainColor">
                            Quest
                        </span>
                        <span className="font-light">ify</span>
                    </span>
                </div>
            </div>
            {}
            {/* buttons */}
            <div className='mt-4 flex gap-4 sm:mt-0 sm:flex-row sm:items-center btn-box'>
            <Link to="/login"> <button 
              style={backgroundColorObject}
              className={"block sm:w-32 w-full rounded-lg px-9 py-3  text-sm font-medium text-white transition focus:outline-none"}
              >
              Sign In
              </button></Link>  
              <Link to='/signup'><button 
              className={`block sm:w-32 w-full border rounded-lg px-9 py-3  text-sm font-medium transition focus:outline-none hover:bg-customPurple hover:text-white border-customPurple text-customPurple` } type="button"
              >
               Sign Up
              </button></Link> 
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;