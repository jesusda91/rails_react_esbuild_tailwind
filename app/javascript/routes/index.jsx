import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Recipe from '../components/Recipe';
import NewRecipe from '../components/NewRecipe';

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe" element={<NewRecipe />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  )
}

export default AppRoutes;