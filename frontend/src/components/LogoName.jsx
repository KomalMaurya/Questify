import icon from '/logo.svg';
function LogoName ()  {
  const defaultcolor="#80288b";
  const backgroundColorObject={backgroundColor:defaultcolor};
  return (
    <>
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
    </div>
    </>
  )
}

export default LogoName;