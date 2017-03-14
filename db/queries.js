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
  deleteRecipe
};

////////////////// User Queries \\\\\\\\\\\\\\\\\\\\\

function getAllUsers(){
    return knex("users").select("*");
}

function getOneUser(id){
    return knex("recipes").select("*").where("id", id);
}

function createUser(recipes){
    return knex("recipes").insert(recipes);
}

function editUser(id, post) {
    return knex("recipes").where("id", id).update(post, "id");
}
function deleteUser(id) {
    return knex("recipes").where("id", id).del();
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

function editRecipe(id, post) {
    return knex("recipes").where("id", id).update(post, "id");
}
function deleteRecipe(id) {
    return knex("recipes").where("id", id).del();
}
