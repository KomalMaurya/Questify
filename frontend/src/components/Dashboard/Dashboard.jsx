import {useEffect,useState} from "react";
import axios from "axios";
import Sidebar from "../sidebar/sidebar";
const Dashboard = () => {
    const [userdata,setUserdata]=useState({});
    console.log("response",userdata);
    const defaultcolor="#80288b";
    const backgroundColorObject={backgroundColor:defaultcolor};

    const getUser=async()=>{
        try {
            const response=await axios.get("http://localhost:6005/login/success",{withCredentials:true});
            
            setUserdata(response.data.user)
        } catch (error) {
            console.log("error",error)
        }
    }

    // logout
    const logout=()=>{
        window.open(`http://localhost:6005/logout`,"_self")
    }

    useEffect(()=>{
        getUser()
    },[])


  return (
    <>
    <div>
        {
            Object?.keys(userdata)?.length>0?(
                <>
                
                
                <div className="absolute left-[19%] w-4/5 h-screen bg-slate-50 ">
                    <h2>Hello</h2>
                    <li style={{color:"black"}} className="absolute right-[0]">
                <li className="text-black text-center">{userdata.displayName}</li>
                <li>
                    <img src={userdata.image} style={{width:"50px",borderRadius:"5"}}/>
                </li>
                <li onClick={logout} style={backgroundColorObject} className="block sm:w-32 w-full rounded-lg px-9 py-3  text-sm font-medium text-white transition focus:outline-none cursor-pointer">Logout</li>
                <li >Home</li>
                </li>
                </div>
                <Sidebar/>
                </>
            ):
            <>
            <li style={backgroundColorObject}
            className="block sm:w-32 w-full rounded-lg px-9 py-3  text-sm font-medium text-white transition focus:outline-none">Login</li>
            <li >Home</li>
            </>
        }
    </div>
    </>
  )
}

export default Dashboard