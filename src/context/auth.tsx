import { ILogin } from "@/lib/interface/Ilogin";
import { setToken } from "@/services/api/_config";
import axios from "axios";
import router from "next/router";
import React from "react";
import { ReactElement, ReactNode, createContext,  useContext, useEffect, useState } from "react";
// import SelectActionPage from "@/pages/selectAction";


interface AuthContextType{
    auth:any;
    AdminLogin:(data: ILogin) => Promise<any>;
   

}
const usersContext= createContext({
    auth:{},
    AdminLogin: async(data: any) =>{},})
    // const [error, setError]=useState()

export default function Context ({children}: {children: ReactNode}){
    const [error, setError] = React.useState<string | null>(null); 
    useEffect(() => {
        let tokens = JSON.parse(localStorage.getItem("token") || "{}");
        if(tokens){
            setToken(tokens?.key);
                }
      }, []);
      
    const AdminLogin = async(data: ILogin)=>{
        const Promise = await axios
        .post("/auth/login", data)
        .then((res)=>{
          localStorage.setItem('token', JSON.stringify(res.data));
          setToken(res.data.key);
          console.log(res.data)
          router.push("/dashboard")
        })
        .catch((e)=>{
          const message = e.response?.data?.message|| "Network Error"
          setError(message)
          console.log(e)
          throw new Error (message)
        })
        return Promise
      }
      const value={
        auth: {},
        AdminLogin,
        error
           }
  

    return(
        <>
        <usersContext.Provider value={value}>
            {children}
        </usersContext.Provider>
        </>
    )
}
const contextProvider = () => useContext(usersContext)
export {contextProvider}