function Recipe({recipe_name,image,calories,ingredients,recipe_url }) {
    return(
        <div className='recipe_box'>
            <h3>{recipe_name}</h3>
            <img className='recipe_image' src={image} alt="recipe_image" srcset=""/>
            <div className="recipe_ingrediants">
            <div className="recipe_calories"><strong>Calories</strong> {calories}</div>
                <strong>Ingrediants</strong>
                <ul>
                    {
                        ingredients.map(ingredient =>(
                            <li> {ingredient.text} </li>
                        ))
                    }
                </ul>
            </div>
                <div className="recipe_view"><a className="recipe_view_button" href={recipe_url} target="_blank" rel="noopener noreferrer">View Recipe</a></div>
            
        </div>
    );
}

export default Recipe;