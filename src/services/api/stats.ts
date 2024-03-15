import { IStats } from "@/lib/interface/IStats";
import { CreateUserModel, UserModel, Role } from "@/lib/interface/Iregister";
import axios, { AxiosResponse } from "axios";

export async function getStatsDetails() :Promise<IStats> {
    return axios
    .get<IStats>("/profile/stats/gender")
    .then((response)=>{
      console.log(response.data)
      return response.data;
    }).catch((e)=>{
      const message = e.response?.data?.message || "Network Error";
      console.log(message)
      throw new Error(message);
    })
  }
  
  