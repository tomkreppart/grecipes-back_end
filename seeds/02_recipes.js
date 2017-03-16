exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          title: "Chantal's New York Cheesecake",
          author: 'Rachael Ray',
          user_id: 4,
          description: "This cake is easy to make, and it's so delicious. Everyone that's tried it has said it tasted just like the ones in a deli! You'll love it!",
          imgURL: "http://images.media-allrecipes.com/userphotos/560x315/730824.jpg"
        },
        {
          title: "Simple White Cake",
          author: 'Nathan Edlen',
          user_id: 1,
          description: "This cake was sent home from our children's school. It is the simplest, great tasting cake I've ever made. Great to make with the kids, especially for cupcakes.",
          imgURL: "http://images.media-allrecipes.com/userphotos/250x250/636110.jpg"
        },
        {
          title: "Baked Ziti",
          author: 'Gordon Ramsay',
          user_id: 3,
          description: "A lady I worked with brought this in one day, and it was a hit. Now it is the favorite of all my dinner guests. It's great for a covered dish dinner too. I have made this also without the meat, and it is well received.",
          imgURL: "http://images.media-allrecipes.com/userphotos/560x315/14573.jpg"
        },
        {
          title: "Fluffy Pancakes",
          author: 'Aunt Jemima',
          user_id: 5,
          description: "Tall and fluffy. These pancakes are just right. Topped with strawberries and whipped cream, they are impossible to resist.",
          imgURL: "http://images.media-allrecipes.com/userphotos/560x315/4469463.jpg"
        },
        {
          title: "Brown Sugar Meatloaf",
          author: 'Tom Krepp',
          user_id: 2,
          description: "This is an easy tasty meatloaf. It tastes as good as it smells!",
          imgURL: "http://images.media-allrecipes.com/userphotos/560x315/2573174.jpg"
        }
      ]);
    });
};
