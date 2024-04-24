import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-container bg-fixed py-10">
            <SectionTitle
                subHeading='Check it out'
                heading='from our menu'
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-400 bg-opacity-60 items-center py-8 px-16">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2028</p>
                    <p className="uppercase mt-2">where can i get some?</p>
                    <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, libero sint odit ipsam repellat quibusdam voluptas voluptatum? Culpa quisquam, neque, quia alias provident pariatur aliquid error corporis molestiae laboriosam officiis quam voluptates, vitae explicabo iusto dolorem laborum aliquam dolorum sapiente. Minima, nihil magnam? Quia recusandae harum quibusdam, expedita cumque natus!</p>
                    <button id="featured-btn" className="btn btn-outline border-1 border-b-4 border-white text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;