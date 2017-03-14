exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_recipes').insert([
        {
          recipe_id: 1,
          quantity: "15",
          units: "",
          ingredient_id: 9
        },
        {
          recipe_id: 1,
          quantity: "2",
          units: "tablespoons",
          ingredient_id: 10
        },
        {
          recipe_id: 1,
          quantity: "32",
          units: "ounces",
          ingredient_id: 11
        },
        {
          recipe_id: 1,
          quantity: "1 1/2",
          units: "cups",
          ingredient_id: 12
        },
        {
          recipe_id: 1,
          quantity: "3/4",
          units: "cup",
          ingredient_id: 13
        },
        {
          recipe_id: 1,
          quantity: "4",
          units: "",
          ingredient_id: 14
        },
        {
          recipe_id: 1,
          quantity: "1",
          units: "cup",
          ingredient_id: 5
        },
        {
          recipe_id: 1,
          quantity: "1",
          units: "tablespoon",
          ingredient_id: 15
        },
        {
          recipe_id: 1,
          quantity: "1/4",
          units: "cup",
          ingredient_id: 16
        },
        {
          recipe_id: 2,
          quantity: "1",
          units: "cup",
          ingredient_id: 12
        },
        {
          recipe_id: 2,
          quantity: "1/2",
          units: "cup",
          ingredient_id: 10
        },
        {
          recipe_id: 2,
          quantity: "2",
          units: "",
          ingredient_id: 14
        },
        {
          recipe_id: 2,
          quantity: "2",
          units: "teaspoons",
          ingredient_id: 15
        },
        {
          recipe_id: 2,
          quantity: "1 1/2",
          units: "cups",
          ingredient_id: 16
        },
        {
          recipe_id: 2,
          quantity: "1 3/4",
          units: "teaspoons",
          ingredient_id: 17
        },
        {
          recipe_id: 2,
          quantity: "1/2",
          units: "cup",
          ingredient_id: 13
        },
        {
          recipe_id: 3,
          quantity: "1",
          units: "pound",
          ingredient_id: 1
        },
        {
          recipe_id: 3,
          quantity: "1",
          units: "",
          ingredient_id: 2
        },
        {
          recipe_id: 1,
          quantity: "1",
          units: "pound",
          ingredient_id: 3
        },
        {
          recipe_id: 3,
          quantity: "52",
          units: "ounces",
          ingredient_id: 8
        },
        {
          recipe_id: 3,
          quantity: "6",
          units: "ounces",
          ingredient_id: 4
        },
        {
          recipe_id: 3,
          quantity: "1 1/2",
          units: "cups",
          ingredient_id: 5
        },
        {
          recipe_id: 3,
          quantity: "6",
          units: "ounces",
          ingredient_id: 6
        },
        {
          recipe_id: 3,
          quantity: "2",
          units: "tablespoons",
          ingredient_id: 7
        },
        {
          recipe_id: 4,
          quantity: "3/4",
          units: "cup",
          ingredient_id: 13
        },
        {
          recipe_id: 4,
          quantity: "2",
          units: "tablespoons",
          ingredient_id: 18
        },
        {
          recipe_id: 4,
          quantity: "1",
          units: "cup",
          ingredient_id: 16
        },
        {
          recipe_id: 4,
          quantity: "2",
          units: "tablespoons",
          ingredient_id: 12
        },
        {
          recipe_id: 4,
          quantity: "1",
          units: "teaspoon",
          ingredient_id: 17
        },
        {
          recipe_id: 4,
          quantity: "1/2",
          units: "teaspoon",
          ingredient_id: 19
        },
        {
          recipe_id: 4,
          quantity: "1/2",
          units: "teaspoon",
          ingredient_id: 20
        },
        {
          recipe_id: 4,
          quantity: "1",
          units: "",
          ingredient_id: 14
        },
        {
          recipe_id: 4,
          quantity: "2",
          units: "tablespoons",
          ingredient_id: 10
        },
        {
          recipe_id: 5,
          quantity: "1 1/2",
          units: "pounds",
          ingredient_id: 3
        },
        {
          recipe_id: 5,
          quantity: "3/4",
          units: "cup",
          ingredient_id: 13
        },
        {
          recipe_id: 5,
          quantity: "2",
          units: "",
          ingredient_id: 14
        },
        {
          recipe_id: 5,
          quantity: "1 1/2",
          units: "teaspoons",
          ingredient_id: 20
        },
        {
          recipe_id: 5,
          quantity: "1/4",
          units: "teaspoon",
          ingredient_id: 23
        },
        {
          recipe_id: 5,
          quantity: "1",
          units: "small",
          ingredient_id: 2
        },
        {
          recipe_id: 5,
          quantity: "1/2",
          units: "teaspoon",
          ingredient_id: 24
        },
        {
          recipe_id: 5,
          quantity: "3/4",
          units: "cup",
          ingredient_id: 25
        }
      ]);
    });
};
