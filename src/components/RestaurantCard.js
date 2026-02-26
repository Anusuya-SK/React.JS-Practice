export const RestaurantCard = ({ resData }) => {
    const { image, name, rating, ingredients, cuisine, servings } = resData;
    return (
        <div className="res-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>Cuisine: {cuisine}</p>
            <h4>⭐ {rating}</h4>
            <p>Servings: {servings}</p>
            <p>Ingredients: {ingredients.join(", ")}</p>
        </div>
    )
}

export default RestaurantCard;