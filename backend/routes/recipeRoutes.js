const express = require("express");
const { getRecipes, searchRecipes } = require("../controllers/recipeController");
const router = express.Router();

// Get all recipes
router.get("/", getRecipes);

// Search recipes by title
router.get("/search", searchRecipes);

module.exports = router;
