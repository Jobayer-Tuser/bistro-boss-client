import { Link } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";


const MenuCategory = ({ items, bannerImg, bannerTitle }) => {
    return (
        <div className="my-10">
            {bannerTitle && <div id='cover' className="py-32 bg-no-repeat bg-cover" style={{ backgroundImage: `url('${bannerImg}')` }}>
                <div className="w-2/3 mx-auto bg-black opacity-80 text-center text-white p-10">
                    <h3 className="uppercase text-4xl mb-5">{bannerTitle}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti et perspiciatis itaque cum ullam perferendis asperiores amet, qui repudiandae dignissimos totam iusto maxime incidunt magni saepe pariatur dicta. Natus?</p>
                </div>
            </div>}
            <div className="grid md:grid-cols-2 gap-4 my-10">
                {items.map(menuItem => <MenuItem
                    key={menuItem.id}
                    menuItem={menuItem}
                ></MenuItem>)}
            </div>
            <div className="text-center mt-10">
                <Link to={`/order`}><button id="featured-btn" className="btn btn-outline border-1 border-b-4 border-white text-white">Order Your Favourite Food</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;