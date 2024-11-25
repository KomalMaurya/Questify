import {useEffect, usestate} from "react";
import axios from "axios";

const Dashboard = () => {
    const [userdata,setUserdata]=usestate({});
    console.log("response",userdata);

    const getUser=async()=>{
        try {
            const response=await axios.get("http://software-project-indol.vercel.app/login/success",{withCredentials:true});
            
            setUserdata(response.data.user)
        } catch (error) {
            console.log("error",error)
        }
    }

    //logout
    const logout=()=>{
        window.open("http://software-project-indol.vercel.app/logout","_self")
    }

    useEffect(()=>{
        getUser()
    })


  return (
    <>
    <div>
        {
            Object.keys(userdata)?.length>0?(
                <>
                <li className="text-black">{userdata.displayName}</li>
                <li>
                    <img src={userdata.image} style={{width:"50px",borderRadius:"5"}}/>
                </li>
                <li onClick={logout}>Logout</li>
                </>
            ):
            <>
            </>
        }
    </div>
    </>
  )
}

export default Dashboard