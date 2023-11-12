

const FoodCard = ({item}) => {
    const {name, image, price, recipe} =item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className="bg-slate-800  text-white absolute right-2 mt-4 mr-4 px-4 text-lg rounded-xl hover:bg-gradient-to-r from-indigo-500">${price}</p>
            <div className="card-body text-center items-center">
                <h2 className="card-title text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;