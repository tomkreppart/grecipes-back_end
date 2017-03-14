exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(user){
    user.increments();
    user.string("name");
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
