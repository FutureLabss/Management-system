import { IMutationArgs} from "../../lib/query";
import { QueryClient, useMutation, useQueryClient } from "react-query";


export function useCreateResources<IArg, IReturn>({ callback, key, onSuccess }: IMutationArgs<IArg, IReturn>) {
    const queryClient =useQueryClient();
    return useMutation(
      (data: IArg) => {
        return callback && callback(data);
      },
      {
        onSuccess: (data: IReturn) =>{
          queryClient.invalidateQueries(key);
          onSuccess && onSuccess(data);
        },
        // onError:(error:string[])=>{
        //   return error
          
        // }
      }
    );
  }



