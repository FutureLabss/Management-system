import { IMutationArgs, IMutationHook } from "../../lib/query";
import { useCreateResources } from "../../hooks/helper/mutaation";
import { CreateUserModel, UserModel } from "@/lib/interface/Iregister";
import { DeactivateUserApi } from "@/services/api/status";
import { IDeactivation, IDeactivationUser } from "@/lib/interface/imodal";

export function useDeactivateUser({ onSuccess }: IMutationHook) {
  const deactivateUserArgs: IMutationArgs<UserModel, IDeactivationUser> = {
    key: ["users"],
    callback:(user: UserModel) => DeactivateUserApi(user.id,!user.status),
    onSuccess: onSuccess,
  };

  return useCreateResources(deactivateUserArgs);
}
