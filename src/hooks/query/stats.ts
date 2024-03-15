import { IQueryArgs } from "../../lib/query";
import {  UserModel } from "@/lib/interface/Iregister";
import { useGetResourcesQuery } from "../helper/query";
import { getStatsDetails } from "@/services/api/stats";
import { IStats } from "@/lib/interface/IStats";


export function useUsersStats() {
  const usersStats: IQueryArgs<IStats, IStats> = {
    key: ["stats", ],
    callback: () => getStatsDetails(),
  };
  return useGetResourcesQuery(usersStats);
}
