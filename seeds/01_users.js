
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          name: "Nathan Edlen"
        }
        {
          id: 2,
          name: "Tom Krepp"
        }
        {
          id: 3,
          name: "Gordon Ramsey"
        }
        {
          id: 4,
          name: "Rachael Ray"
        }
        {
          id: 5,
          name: "Aunt Jemima"
        }
      ]);
    });
};
