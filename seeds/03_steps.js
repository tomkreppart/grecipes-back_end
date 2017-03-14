exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          body: "Preheat oven to 350 degrees F (175 degrees C). Grease a 9 inch springform pan.",
          recipe_id: 1,
          stepOrder: 1
        },
        {
          body: "In a medium bowl, mix graham cracker crumbs with melted butter. Press onto bottom of springform pan.",
          recipe_id: 1,
          stepOrder: 2
        },
        {
          body: "In a large bowl, mix cream cheese with sugar until smooth. Blend in milk, and then mix in the eggs one at a time, mixing just enough to incorporate. Mix in sour cream, vanilla and flour until smooth. Pour filling into prepared crust.",
          recipe_id: 1,
          stepOrder: 3
        },
        {
          body: "Bake in preheated oven for 1 hour. Turn the oven off, and let cake cool in oven with the door closed for 5 to 6 hours; this prevents cracking. Chill in refrigerator until serving.",
          recipe_id: 1,
          stepOrder: 4
        },
        {
          body: "Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x9 inch pan or line a muffin pan with paper liners.",
          recipe_id: 2,
          stepOrder: 1
        },
        {
          body: "In a medium bowl, cream together the sugar and butter. Beat in the eggs, one at a time, then stir in the vanilla. Combine flour and baking powder, add to the creamed mixture and mix well. Finally stir in the milk until batter is smooth. Pour or spoon batter into the prepared pan.",
          recipe_id: 2,
          stepOrder: 2
        },
        {
          body: "Bake for 30 to 40 minutes in the preheated oven. For cupcakes, bake 20 to 25 minutes. Cake is done when it springs back to the touch.",
          recipe_id: 2,
          stepOrder: 3
        },
        {
          body: "Bring a large pot of lightly salted water to a boil. Add ziti pasta, and cook until al dente, about 8 minutes; drain.",
          recipe_id: 3,
          stepOrder: 1
        },
        {
          body: "In a large skillet, brown onion and ground beef over medium heat. Add spaghetti sauce, and simmer 15 minutes.",
          recipe_id: 3,
          stepOrder: 2
        },
        {
          body: "Preheat the oven to 350 degrees F (175 degrees C). Butter a 9x13 inch baking dish. Layer as follows: 1/2 of the ziti, Provolone cheese, sour cream, 1/2 sauce mixture, remaining ziti, mozzarella cheese and remaining sauce mixture. Top with grated Parmesan cheese.",
          recipe_id: 3,
          stepOrder: 3
        },
        {
          body: "Bake for 30 minutes in the preheated oven, or until cheeses are melted.",
          recipe_id: 3,
          stepOrder: 4
        },
        {
          body: "Combine milk with vinegar in a medium bowl and set aside for 5 minutes to 'sour'.",
          recipe_id: 4,
          stepOrder: 1
        },
        {
          body: "Combine flour, sugar, baking powder, baking soda, and salt in a large mixing bowl. Whisk egg and butter into 'soured' milk. Pour the flour mixture into the wet ingredients and whisk until lumps are gone.",
          recipe_id: 4,
          stepOrder: 2
        },
        {
          body: "Heat a large skillet over medium heat, and coat with cooking spray. Pour 1/4 cupfuls of batter onto the skillet, and cook until bubbles appear on the surface. Flip with a spatula, and cook until browned on the other side.",
          recipe_id: 4,
          stepOrder: 3
        },
        {
          body: "Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 5x9 inch loaf pan.",
          recipe_id: 5,
          stepOrder: 1
        },
        {
          body: "Press the brown sugar in the bottom of the prepared loaf pan and spread the ketchup over the sugar.",
          recipe_id: 5,
          stepOrder: 2
        },
        {
          body: "In a mixing bowl, mix thoroughly all remaining ingredients and shape into a loaf. Place on top of the ketchup.",
          recipe_id: 5,
          stepOrder: 3
        },
        {
          body: "Bake in preheated oven for 1 hour or until juices are clear.",
          recipe_id: 5,
          stepOrder: 4
        }
      ]);
    });
};
