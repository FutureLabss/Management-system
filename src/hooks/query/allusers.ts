import { getProfile, getProfilePagination,  } from "@/services/api/profile";
import { IAPIFilter, IPaginatedQueryArgs, IQueryArgs } from "../../lib/query";
import {  UserModel } from "@/lib/interface/Iregister";
import { useGetResourcesQuery, usePaginationQuery } from "../helper/query";

// getProfile
export function useGetUsers() {
  const users: IQueryArgs<UserModel, UserModel[]> = {
    key: ["users", ],
    callback: () => getProfile(),
  };
  return useGetResourcesQuery(users);
}


export function usePaginatedUsers(filter: IAPIFilter) {
  const pagination: IPaginatedQueryArgs<UserModel[]> = {
    key: ["users", filter],
    callback: () => getProfilePagination(filter ),
  };
  return usePaginationQuery(pagination);
}
