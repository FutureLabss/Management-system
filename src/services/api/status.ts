import { IDeactivation, IDeactivationUser } from "@/lib/interface/imodal";
import axios, { AxiosResponse } from "axios";
import { FaLastfmSquare } from "react-icons/fa";


export async function DeactivateUserApi(id: string,status:boolean): Promise<IDeactivationUser> {
    const data = {
        "isActive": status
    };
    return axios.put<IDeactivationUser>(`/profile/admin/updateStatus/${id}`, data,
    {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response: AxiosResponse<IDeactivationUser>) => {
        if (response.status === 200) {
            console.log("User deactivated successfully!");
            return response.data; 
        } else {
            console.error("Error deactivating user:", response.data);
            throw new Error("Error deactivating user");
        }
    }).catch((error) => {
        console.error("Error deactivating user:", error);
        throw error; 
    });
}
