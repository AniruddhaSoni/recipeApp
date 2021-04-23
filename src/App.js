import React, { useEffect, useState } from "react";
import './App.css';
import Recipe from "./components/Recipe";

function App() {

  
  const [recipes,setRecipe] = useState([]);
  const [search,setSearch] = useState('');
  const [query ,setQuery] = useState('');
  
  const CALL_URL = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  const callApi = async()=>{
    const response = await fetch(CALL_URL);
    const data = await response.json();
    setRecipe(data.hits);
  }
  
  
  const updateSearch = e =>{
    setSearch(e.target.value);
  }
  const getSearch = e =>{
    e.preventDefault()
    setQuery(search)
  }
  
  useEffect(()=>{
    callApi();
  },[query]);

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search_form'>
        <input className='search_bar' type="search" name="" id="" placeholder='search the recipe' value={search} onChange={updateSearch}/>
        <button className='search_button ' type="submit" >search</button>
      </form>

      <div className="recipe">
       {
         recipes.map(recipe =>(
           <Recipe 
           key={recipe.recipe.label}
           recipe_name={recipe.recipe.label}
           image={recipe.recipe.image}
           calories={recipe.recipe.calories}
           ingredients={recipe.recipe.ingredients}
           recipe_url={recipe.recipe.url}     
           />
         ))
       }
      </div>
    </div>
  );
}

export default App;
