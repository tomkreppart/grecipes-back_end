exports.up = function(knex, Promise) {
  return knex.schema.createTable("reviews", function(review){
    review.increments();
    review.text("body");
    review.integer("rating");
    review.integer("recipe_id").references("id").inTable("recipes");
    review.integer("user_id").references("id").inTable("users");
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("reviews");
};
