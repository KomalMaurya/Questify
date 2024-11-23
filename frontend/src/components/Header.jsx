// import React from "react";
import icon from '/logo.svg';
const Header = () => {
    const defaultcolor="#451c4a";
    const backgroundColorObject={backgroundColor:defaultcolor};
  return (
    <header>
      <div className="p-8 px-20"> 
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left mb-7 sm:mb-0">
                {/*Name of the App*/}
                <div className="flex gap-2 items-center sm:justify-start justify-center">
                    <span className="font-light flex items-center gap-2 icon-box-1">
                        {/* icon */}
                        <div style={backgroundColorObject} className="icon-box">
                            <img src={icon} height={45} width={40}/>
                        </div>
                        {/* {Name of the app} */}
                        <span style={{color:"#451c4a"}} className="font-bold text-mainColor">
                            Quest
                        </span>
                        <span className="font-light">ify</span>
                    </span>
                </div>
            </div>
            {}
            {/* buttons */}
        </div>
      </div>
    </header>
  );
};

export default Header;