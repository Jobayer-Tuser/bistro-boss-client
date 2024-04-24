import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import cardImage from '../../../assets/home/pexels-ella-olsson-572949-1640777.jpg';
import './ChefRecommends.css';


const ChefRecmmends = () => {
    return (
        <div>
            <section>
                <SectionTitle
                    subHeading={'Should Try'}
                    heading={'chef recommends'}
                ></SectionTitle>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-full" src={cardImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl text-center">Caesar Salad</h2>
                            <p className="text-center my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt recusandae dolor non dolore illo maxime?</p>
                            <div className="card-actions justify-end mx-auto">
                                <button className="btn text-yellow-200 font-medium" id="card-btn">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-full" src={cardImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl text-center">Caesar Salad</h2>
                            <p className="text-center my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt recusandae dolor non dolore illo maxime?</p>
                            <div className="card-actions justify-end mx-auto">
                                <button className="btn text-yellow-200 font-medium" id="card-btn">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-full" src={cardImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl text-center">Caesar Salad</h2>
                            <p className="text-center my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt recusandae dolor non dolore illo maxime?</p>
                            <div className="card-actions justify-end mx-auto">
                                <button className="btn text-yellow-200 font-medium" id="card-btn">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default ChefRecmmends;