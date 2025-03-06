const Recipe = require("../models/Recipe");

// Get all recipes
exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Search recipes by title
exports.searchRecipes = async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) {
      return res.status(400).json({ message: "Title query is required" });
    }

    // Case-insensitive search for title containing the query
    const recipes = await Recipe.find({
      title: { $regex: title, $options: "i" },
    });

    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
