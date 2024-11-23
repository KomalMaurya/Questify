// import React from "react";

const Header = () => {
    const defaultcolor="#d90429";
    const backgroundColorObject={backgroundColor:defaultcolor};
  return (
    <header>
      <div className="p-8 px-20"> 
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left mb-7 sm:mb-0">
                {/*Name of the App*/}
                {/* {} */}
                <div className="flex gap-2 items-center sm:justify-start justify-center">
                    <span className="text-2xl font-light flex items-center gap-2">
                        {/* icon */}
                        <div style={backgroundColorObject} className="p-2 rounded-md"></div>
                    </span>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;