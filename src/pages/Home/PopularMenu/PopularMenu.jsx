import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menuItems] = useMenu();
    const popular = menuItems.filter(item => item.category === 'popular')
    
    return (
        <section className="mb-12 mx-10 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-0">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'from our menu'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {popular.map(menuItem => <MenuItem
                    key={menuItem._id}
                    menuItem={menuItem}
                ></MenuItem>)}
            </div>
            <div className="text-center mt-10">
                <button id="featured-btn" className="btn btn-outline border-1 border-b-4 border-white text-white">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;