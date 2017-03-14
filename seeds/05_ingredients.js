exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          name: "dry ziti pasta"
        },
        {
          id: 2,
          name: "onion, chopped"
        },
        {
          id: 3,
          name: "lean ground beef"
        },
        {
          id: 4,
          name: "provolone cheese, sliced"
        },
        {
          id: 5,
          name: "sour cream"
        },
        {
          id: 6,
          name: "mozzarella cheese, shredded"
        },
        {
          id: 7,
          name: "grated Parmesan cheese"
        },
        {
          id: 8,
          name: "spaghetti sauce"
        },
        {
          id: 9,
          name: "graham crackers, crushed"
        },
        {
          id: 10,
          name: "butter"
        },
        {
          id: 11,
          name: "cream cheese"
        },
        {
          id: 12,
          name: "white sugar"
        },
        {
          id: 13,
          name: "milk"
        },
        {
          id: 14,
          name: "eggs"
        },
        {
          id: 15,
          name: "vanilla extract"
        },
        {
          id: 16,
          name: "all-purpose flour"
        },
        {
          id: 17,
          name: "baking powder"
        },
        {
          id: 18,
          name: "white vinegar"
        },
        {
          id: 19,
          name: "baking soda"
        },
        {
          id: 20,
          name: "salt"
        },
        {
          id: 21,
          name: "packed brown sugar"
        },
        {
          id: 22,
          name: "ketchup"
        },
        {
          id: 23,
          name: "ground black pepper"
        },
        {
          id: 24,
          name: "ground ginger"
        },
        {
          id: 25,
          name: "saltine cracker crumbs"
        }
      ]);
    });
};
