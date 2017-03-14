exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          body: "OK - I don't want to be rude, but this is the deal: this is a perfect recipe, and if it fails for you, it's your fault, not the recipe's.",
          rating: 4,
          recipe_id: 1,
          user_id: 2
        },
        {
          body: "AMAZING! The KING of all cheesecakes! This is the recipe you are looking for, Thick and Creamy! Ive made this 2X now with tremendous sucess.",
          rating: 5,
          recipe_id: 1,
          user_id: 3
        },
        {
          body: "This is by far the simplest and tastiest cake recipe I've ever tried. I like to add a bit extra milk which keeps it soft and moist.",
          rating: 5,
          recipe_id: 2,
          user_id: 4
        },
        {
          body: "Yum! i just made cupcakes with this recipe and they're delicious! I don't know why many people said that their cake was dense and dry, mine turned out fluffy and moist and yummy!",
          rating: 4,
          recipe_id: 2,
          user_id: 5
        },
        {
          body: "Try RICOTTA CHEESE instead of sour cream and skip the provolone for a real Italian version of Baked Ziti. Mix an egg into a pound of ricotta to make it nice and creamy, and toss with the ziti. ",
          rating: 3,
          recipe_id: 3,
          user_id: 1
        },
        {
          body: "I'm rating this only a 3 star because the recipe doesn't tell you to bake it COVERED! I baked uncovered and it dried out. Not good, and certainly not 'Hall of Fame' worthy. I'll try it again...",
          rating: 2,
          recipe_id: 3,
          user_id: 5
        },
        {
          body: "Classic recipe for really 'Fluffy' pancakes! I always have buttermilk handy so I used that instead of doing sour milk as I find the real stuff does make a difference.",
          rating: 4,
          recipe_id: 4,
          user_id: 2
        },
        {
          body: "i followed this recipe exactly and they were great!! they turned out very well the kids gobbled them up no more box mix for me!! ",
          rating: 5,
          recipe_id: 4,
          user_id: 3
        },
        {
          body: "Yummy!! Best meatloaf I ever made. I did use onion soup mix instead of the chopped onion and only 1/4 c. milk, thought the mixture was moist enough and didnt want it to be too mushy.",
          rating: 5,
          recipe_id: 5,
          user_id: 4
        },
        {
          body: "Sorry, but I didn't like this at all.",
          rating: 1,
          recipe_id: 5,
          user_id: 1
        }
      ]);
    });
};
