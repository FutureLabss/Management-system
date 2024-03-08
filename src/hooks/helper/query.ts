import { IQueryArgs, IQueryOptions } from "../../lib/query";
import {  useQuery } from "react-query";

export function useGetResourcesQuery<IArg, IReturn>(
  { callback, key }: IQueryArgs<IArg, IReturn>,
  options?: IQueryOptions
) {
  const { status, data, isLoading, error } = useQuery(
    key,
    (arg) => {
      return callback && callback(arg);
    },
    options
  );
  return { data, status, loading: isLoading, error };
}
