import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const usePayments = () => {
    const axiosSecure = useAxiosSecure();
    // Tan stack query
    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allPayments`)
            return res.data;
        }
    })
    return [payments, refetch]
};

export default usePayments;