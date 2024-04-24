import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecmmends from "../ChefRecommends/ChefRecmmends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import SubBanner from "../SubBanner/SubBanner";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <SubBanner></SubBanner>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecmmends></ChefRecmmends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;