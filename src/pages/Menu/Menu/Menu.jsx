import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuBg from '../../../assets/menu/banner3.jpg';
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Menu.css';
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';


const Menu = () => {
    const [menuItems] = useMenu();
    const desserts = menuItems.filter(item => item.category === 'dessert');
    const sopu = menuItems.filter(item => item.category === 'soup');
    const salad = menuItems.filter(item => item.category === 'salad');
    const pizza = menuItems.filter(item => item.category === 'pizza');
    const offered = menuItems.filter(item => item.category === 'offered');

    console.log(desserts)
    return (
        <div>
            <Helmet>
                <title>Bistro-Boss | Menu</title>
            </Helmet>
            <Cover img={menuBg} title={'our menu'}></Cover>
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"todays offer"}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} bannerImg={dessertImg} bannerTitle={'desserts'}></MenuCategory>
            <MenuCategory items={pizza} bannerImg={pizzaImg} bannerTitle={'pizza'}></MenuCategory>
            <MenuCategory items={salad} bannerImg={saladImg} bannerTitle={'salad'}></MenuCategory>
            <MenuCategory items={sopu} bannerImg={soupImg} bannerTitle={'soup'}></MenuCategory>
        </div>
    );
};

export default Menu;