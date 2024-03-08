import { IMutationArgs, IMutationHook } from "../../lib/query";
import { createProfile } from "../../services/api/profile";
import { useCreateResources } from "../../hooks/helper/mutaation";
import { CreateUserModel, UserModel } from "@/lib/interface/Iregister";


export function useRegisterUser ({onSuccess}: IMutationHook){
    const creatuser: IMutationArgs< CreateUserModel, UserModel> = {
        key:['register'],
        callback:(data: CreateUserModel) => createProfile(data),
        onSuccess: onSuccess,
    };
    return useCreateResources(creatuser)
}
