import { CreateUserModel, UserModel, Role } from "@/lib/interface/Iregister";
import axios from "axios";

export function createProfile(data: CreateUserModel) {
  return axios.post<UserModel>("/profile/admin", data).catch((e)=>{
      const message = e.response?.data?.message|| "Network Error"
      if(Array.isArray(message)){
        const error = message.join('\n')
        console.log({error})
        throw new Error (error)
      }
      throw new Error (message)
    });
}

export async function getProfile(): Promise<UserModel[]> {
  return axios.get<UserModel[]>("/profile/admin").then((resp) =>
    resp.data.map((item) => ({
      ...item,
      role: item.role || Role.User,
      department: item.department || "Developer",
      lastClockedIn:"9:00 AM",
      lastClockedOut:"9:00 AM",
    }))
  )
}

export function getProfileDetail(id: string) {
  return axios.get<UserModel>(`/profile/admin/${id}`);
}
