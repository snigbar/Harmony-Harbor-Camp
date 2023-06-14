import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './UseAxiosSecure'
import { AuthContext } from '../Providers/AuthProvider'


const UsePayments = () => {
    const {user,loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [payments, refetch]

}

export default UsePayments