exports.up = function(knex, Promise) {
  return knex.schema.createTable("steps", function(steps){
    steps.increments();
    steps.text("body");
    steps.integer("recipe_id").references("id").inTable("recipes");
    steps.integer("stepOrder");
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("steps");
};
