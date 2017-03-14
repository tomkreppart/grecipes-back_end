exports.up = function(knex, Promise) {
  return knex.schema.createTable("reviews", function(review){
    review.increments();
    review.text("body");
    review.integer("rating");
    review.integer("recipe_id").references("id").inTable("recipes").onDelete("cascade");
    review.integer("user_id").references("id").inTable("users").onDelete("cascade");
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("reviews");
};
