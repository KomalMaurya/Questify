import {useEffect,useState} from "react";
import axios from "axios";
import Sidebar from "../sidebar/sidebar";
const Dashboard = () => {
    const [userdata,setUserdata]=useState({});
    console.log("response",userdata);

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
                
                
                <div className="absolute flex left-[19%] w-128 h-screen  gap-2 bg-slate-50">
                    <div className="w-2/3 h-screen  mt-5 ml-4 mr-3 rounded-md">
                        <div className="bg-white h-20 items-center p-5">
                            <div className="flex">
                            <h2 className="text-xl font-bold">Hey There! </h2>&nbsp;<li className="text-xl text-black">{userdata.displayName}</li>
                            <div>
                                <input type="text" placeholder="Search" className="border bg-slate-200 p-3 rounded-3xl focus:outline-none ml-20 -mt-10 -mb-8" ></input>
                            </div>
                            </div>
                            <span className="text-slate-400 font-thin -mt-3">welcome back!</span>
                        </div>
                        
                    </div>
                    <div className="w-1/3 bg-white mt-5 mr-4 rounded-md">
                        <li style={{color:"black"}} className="absolute right-[0]">
                        
                        <li>
                            <img src={userdata.image} style={{width:"50px",borderRadius:"50%"}}/>
                        </li>
                        <li onClick={logout} className="block sm:w-32 w-full rounded-lg px-9 py-3  text-sm font-medium text-white transition focus:outline-none cursor-pointer hover:text-customPurple hover:border bg-customPurple border-customPurple hover:bg-transparent">Logout</li>
                        <li >Home</li>
                        </li>
                    </div>
                </div>
                <Sidebar/>
                </>
            ):
            <>
            <li
            className="block sm:w-32 w-full rounded-lg px-9 py-3 hover:bg-white hover:text-customPurple bg-customPurple hover:border border-customPurple text-sm font-medium text-white transition focus:outline-none ">Login</li>
            <li >Home</li>
            </>
        }
    </div>
    </>
  )
}

export default Dashboard