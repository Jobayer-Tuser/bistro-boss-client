import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useBookings = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const { refetch, data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/bookings?email=${user.email}`);
            return res.data;
        }
    })
    return [bookings, refetch]
};

export default useBookings;