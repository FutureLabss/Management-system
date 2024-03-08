import { CreateUserModel, UserModel, Role } from "@/lib/interface/Iregister";
import axios, { AxiosResponse } from "axios";

interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    limit: number;
    page: number;
    count: number;
  };
}

export async function createProfile(data: CreateUserModel): Promise<UserModel> {
  return axios
    .post<UserModel>("/profile/admin", data)
    .then((response: AxiosResponse<UserModel>) => {
      return response.data;
    })
    .catch((e) => {
      const message = e.response?.data?.message || "Network Error";
      if (Array.isArray(message)) {
        const error = message.join("\n");
        console.log({ error });
        throw new Error(error);
      }
      throw new Error(message);
    });
}

export async function getProfile(): Promise<UserModel[]> {
  return axios
    .get<PaginatedResponse<UserModel>>("/profile/admin")
    .then((resp) =>
      resp.data.data.map((item) => ({
        ...item,
        role: item.role || Role.User,
        department: item.department || "Developer",
        lastClockedIn: "9:00 AM",
        lastClockedOut: "9:00 AM",
      }))
    );
}

export async function getProfileDetail(id: string) :Promise<UserModel> {
  return axios
  .get<UserModel>(`/profile/admin/${id}`)
  .then((response)=>{
    console.log(response.data)
    return response.data;
  }).catch((e)=>{
    const message = e.response?.data?.message || "Network Error";
    console.log(message)
    throw new Error(message);
  })
}
