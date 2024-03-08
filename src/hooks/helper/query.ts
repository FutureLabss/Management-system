import { IQueryArgs } from "../../lib/query";
import { useQuery } from "react-query";

export function useGetResourcesQuery<IArg, IReturn>({ callback, key }: IQueryArgs<IArg, IReturn>) {
    const { status, data, isLoading, error } = useQuery(key, (arg) => {
      return callback && callback(arg);
    });
  return { data, status, loading: isLoading, error };
  }