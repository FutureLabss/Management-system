import { IMutationArgs, IMutationHook } from "../../lib/query";
import { useCreateResources } from "../../hooks/helper/mutaation";
import { CreateUserModel, UserModel } from "@/lib/interface/Iregister";
import { DeactivateUserApi } from "@/services/api/status";
import { IDeactivation, IDeactivationUser } from "@/lib/interface/imodal";

export function useDeactivateUser({ onSuccess }: IMutationHook) {
  const deactivateUserArgs: IMutationArgs<string, IDeactivationUser> = {
    key: ["deactivate"],
    callback:(id: string) => DeactivateUserApi(id),
    onSuccess: onSuccess,
  };

  return useCreateResources(deactivateUserArgs);
}
