import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const PaymentHistory = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payments?email=${user.email}`)
            return (res.data);
        }
    })



    return (
        <div>
            <SectionTitle heading={'payment history'} subHeading={'At a Glancel'}></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-center text-black text-lg">
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Total Price</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            payments.map((payment, index) => (
                                <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>{payment.email}</td>
                                    <td>${payment.price}</td>
                                    <td>{payment.date.toLocaleString()}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;