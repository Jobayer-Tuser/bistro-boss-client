import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useReviews = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: reviews = [], refetch, isPending: loading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/reviews/singleUser?email=${user.email}`)
            return res.data;
        }
    })
    return [reviews, refetch, loading];
};

export default useReviews;