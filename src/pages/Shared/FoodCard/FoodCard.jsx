


const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                    <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                    {price && <p className="absolute right-0 mr-4 mt-4 px-2 py-1 rounded-md bg-slate-900 text-white">${price}</p>}
                    <div className="card-body">
                        <h2 className="text-2xl text-center">{name}</h2>
                        <p className="text-center my-2">{recipe}</p>
                        <div className="card-actions justify-end mx-auto">
                            <button className="btn text-yellow-200 font-medium" id="card-btn">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCard;