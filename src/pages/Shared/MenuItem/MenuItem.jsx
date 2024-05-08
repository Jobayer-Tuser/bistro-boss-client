

const MenuItem = (props) => {
    const {name, price, image, recipe} = props.menuItem;
    return (
        <div>
            <div className="flex space-x-4">
                <img style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="" className="w-[110px] h-[104px]"/>
                <div>
                    <h5 className="uppercase">{name}---------------</h5>
                    <p>{recipe}</p>
                </div>
                <p className="text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;