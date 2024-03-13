import { getProfile,  } from "@/services/api/profile";
import { IQueryArgs } from "../../lib/query";
import {  UserModel } from "@/lib/interface/Iregister";
import { useGetResourcesQuery } from "../helper/query";

// getProfile
export function useGetUsers() {
  const users: IQueryArgs<UserModel, UserModel[]> = {
    key: ["users", ],
    callback: () => getProfile(),
  };
  return useGetResourcesQuery(users);
}
