import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";



const UseUsers = () => {
   
    const {user,loading:authLoading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const {data: users =[], isLoading: loading, refetch} = useQuery({
        queryKey: ['allusers'],
        enabled: !authLoading,
        queryFn: async() => {
            const res = await axiosSecure(`/admin/users?email=${user?.email}`);
            console.log(res)
            return res.data;   
        }
    })

    return [users,refetch]
};

export default UseUsers;