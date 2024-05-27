import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="w-full h-screen bg-primary flex items-center justify-center">
    <div className="bg-transparent p-8">
      <div className="container text-secondary">
        <h1 className="text-4xl font-bold">Food Recipes</h1>
        <p className="text-lg mt-4">
          A curated list of recipes for the best homemade meal and delicacies.
        </p>
        <hr className="my-4 border-gray-300" />
        <Link
          to="/recipes"
          className="btn btn-lg custom-button bg-blue-500 text-white py-2 px-4 rounded-lg"
          role="button"
        >
          View Recipes
        </Link>
      </div>
    </div>
  </div>
);
