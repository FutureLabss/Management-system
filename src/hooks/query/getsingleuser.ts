import { getProfileDetail } from "@/services/api/profile";
import { IQueryArgs } from "../../lib/query";
import { CreateUserModel, UserModel } from "@/lib/interface/Iregister";
import { useGetResourcesQuery } from "../helper/query";

export function useGetSingleProduct(id:string){
    const single:IQueryArgs<CreateUserModel, UserModel[] | UserModel>={
        key:["singleUser"],
    callback:()=>getProfileDetail(id)
}
return useGetResourcesQuery(single)
}
