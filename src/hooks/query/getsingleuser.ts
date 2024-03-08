import { getProfileDetail } from "@/services/api/profile";
import { IQueryArgs } from "../../lib/query";
import { CreateUserModel, UserModel } from "@/lib/interface/Iregister";
import { useGetResourcesQuery } from "../helper/query";

export function useGetSingleUser(id: string) {
  const single: IQueryArgs<string, UserModel> = {
    key: ["singleUser", { id }],
    callback: () => getProfileDetail(id),
  };
  return useGetResourcesQuery(single,{enabled:!!id});
}
