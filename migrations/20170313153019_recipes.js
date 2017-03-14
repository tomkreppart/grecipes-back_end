exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(recipe){
    recipe.increments();
    recipe.string("title");
    recipe.string("author");
    recipe.integer("user_id").references("id").inTable("users");
    recipe.text("description");
    recipe.string("imgURL");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes")
};
