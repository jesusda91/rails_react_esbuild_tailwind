import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Recipes = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const url = "/api/v1/recipes/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setRecipes(res))
      .catch(() => navigate("/"));
  }, []);

  const allRecipes = recipes.map((recipe, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
        <img
          src={recipe.image}
          className="card-img-top"
          alt={`${recipe.name} image`}
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold mb-2">{recipe.name}</h5>
          <Link to={`/recipe/${recipe.id}`} className="btn custom-button">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  ));
  const noRecipe = (
    <div className="w-full h-1/2 flex items-center justify-center">
      <h4>
        No recipes yet. Why not{" "}
        <Link to="/new_recipe" className="text-blue-500 hover:underline">
          create one
        </Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="bg-gray-100 text-center py-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Recipes for every occasion</h1>
          <p className="text-lg text-gray-600 mt-4">
            We’ve pulled together our most popular recipes, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container mx-auto">
          <div className="text-right mb-3">
            <Link
              to="/recipe"
              className="btn bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Create New Recipe
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.length > 0 ? allRecipes : noRecipe}
          </div>
          <Link
            to="/"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default Recipes;
