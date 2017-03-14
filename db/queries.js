var knex = require("../db/knex");

module.exports = {

  getAllUsers,
  getOneUser,
  createUser,
  editUser,
  deleteUser,

  getAllRecipes,
  getOneRecipe,
  createRecipe,
  editRecipe,
  deleteRecipe,

  getAllSteps,
  getOneStep,
  createStep,
  editStep,
  deleteStep,

  getAllReviews,
  getOneReview,
  createReview,
  editReview,
  deleteReview,

  getAllIngredients,
  getOneIngredient,
  createIngredient,
  editIngredient,
  deleteIngredient
};

////////////////// User Queries \\\\\\\\\\\\\\\\\\\\\

function getAllUsers(){
    return knex("users").select("*");
}

function getOneUser(id){
    return knex("users").select("*").where("id", id);
}

function createUser(user){
    return knex("users").insert(user);
}

function editUser(id, user) {
    return knex("users").where("id", id).update(user, "id");
}
function deleteUser(id) {
    return knex("users").where("id", id).del();
}

////////////////// Recipe Queries \\\\\\\\\\\\\\\\\\\\\

function getAllRecipes(){
    return knex("recipes").join("users", "users.id", "=", "recipes.user_id");
}

function getOneRecipe(id){
    return knex("recipes").select("*").where("id", id);
}

function createRecipe(recipe){
    return knex("recipes").insert(recipe);
}

function editRecipe(id, recipe) {
    return knex("recipes").where("id", id).update(recipe, "id");
}
function deleteRecipe(id) {
    return knex("recipes").where("id", id).del();
}

////////////////// Steps Queries \\\\\\\\\\\\\\\\\\\\\

function getAllSteps(){
    return knex("steps").select("*").join("recipes", "recipes.id", "=", "steps.recipe_id");
}

function getOneStep(id){
    return knex("steps").select("*").where("id", id);
}

function createStep(step){
    return knex("steps").insert(step);
}

function editStep(id, step) {
    return knex("steps").where("id", id).update(step, "id");
}
function deleteStep(id) {
    return knex("steps").where("id", id).del();
}

////////////////// Reviews Queries \\\\\\\\\\\\\\\\\\\\\

function getAllReviews(){
    return knex("reviews").select("*");
}

function getOneReview(id){
    return knex("reviews").select("*").where("id", id);
}

function createReview(review){
    return knex("reviews").insert(review);
}

function editReview(id, review) {
    return knex("reviews").where("id", id).update(review, "id");
}
function deleteReview(id) {
    return knex("reviews").where("id", id).del();
}

////////////////// Ingredients Queries \\\\\\\\\\\\\\\\\\\\\

function getAllIngredients(){
    return knex("ingredients").select("*");
}

function getOneIngredient(id){
    return knex("ingredients").select("*").where("id", id);
}

function createIngredient(ingredient){
    return knex("ingredients").insert(ingredient);
}

function editIngredient(id, ingredient) {
    return knex("ingredients").where("id", id).update(ingredient, "id");
}
function deleteIngredient(id) {
    return knex("ingredients").where("id", id).del();
}
