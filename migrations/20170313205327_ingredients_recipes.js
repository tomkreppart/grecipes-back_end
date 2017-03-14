exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients_recipes", function(measurement){
    measurement.increments();
    measurement.integer("recipe_id").references("id").inTable("recipes");
    measurement.string("quantity");
    measurement.string("units");
    measurement.integer("ingredient_id").references("id").inTable("ingredients");
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients_recipes");
};
