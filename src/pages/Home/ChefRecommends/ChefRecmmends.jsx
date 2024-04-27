import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import image from '../../../assets/home/pexels-ella-olsson-572949-1640777.jpg';
import './ChefRecommends.css';
import FoodCard from "../../Shared/FoodCard/FoodCard";


const ChefRecmmends = () => {
    const item = { image: image, name: 'Caesar Salad', recipe: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt recusandae dolor non dolore illo maxime' }
    return (
        <div>
            <section>
                <SectionTitle
                    subHeading={'Should Try'}
                    heading={'chef recommends'}
                ></SectionTitle>
                <div className="grid md:grid-cols-3 gap-4">
                    <FoodCard
                        item={item}
                    ></FoodCard>
                    <FoodCard
                        item={item}
                    ></FoodCard>
                    <FoodCard
                        item={item}
                    ></FoodCard>
                </div>

            </section>
        </div>
    );
};

export default ChefRecmmends;