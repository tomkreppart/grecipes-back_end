var knex = require("../db/knex");

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  editUser,
  deleteUser,
  listRecipes,
  readRecipe,
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
    return knex("recipe").where("id", id).update(post, "id");
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

function createRecipe(recipes){
    return knex("recipes").insert(recipes);
}

function editRecipe(id, post) {
    return knex("recipes").where("id", id).update(post, "id");
}
function deleteRecipe(id) {
    return knex("recipes").where("id", id).del();
}
