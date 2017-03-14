exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", function(ingredient){
    ingredient.increments();
    ingredient.string("name");
    ingredient.string("imgURL");
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
