exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          id: 1,
          name: "dry ziti pasta",
          imgURL: "http://cdnimg.webstaurantstore.com/images/products/extra_large/1307/385534.jpg"
        },
        {
          id: 2,
          name: "onion, chopped",
          imgURL: "https://cdn.pixabay.com/photo/2013/02/21/19/14/onion-bulbs-84722_960_720.jpg"
        },
        {
          id: 3,
          name: "lean ground beef",
          imgURL: "http://oklahomafarmreport.com/wire/news/2012/08/media/04327_groundbeef08152012.jpg"
        },
        {
          id: 4,
          name: "provolone cheese, sliced",
          imgURL: "http://goldenagecheese.com/wp-content/uploads/2014/03/prov.jpg"
        },
        {
          id: 5,
          name: "sour cream",
          imgURL: "http://www.seriouseats.com/images/2015/09/20150923-sour-cream-primary.jpg"
        },
        {
          id: 6,
          name: "mozzarella cheese, shredded",
          imgURL: "http://cookdiary.net/wp-content/uploads/images/Mozzarella-Cheese_9530.jpg"
        },
        {
          id: 7,
          name: "grated Parmesan cheese",
          imgURL: "http://janeshealthykitchen.com/wp-content/uploads/2010/03/8176082114_3b318e4b1b_o-750x500.jpg?x59486"
        },
        {
          id: 8,
          name: "spaghetti sauce",
          imgURL: "http://cookdiary.net/wp-content/uploads/images/Spaghetti-Sauce_5747.jpg"
        },
        {
          id: 9,
          name: "graham crackers, crushed",
          imgURL: "http://www.cheatsheet.com/wp-content/uploads/2014/11/Graham-Crackers-640x426.jpg"
        },
        {
          id: 10,
          name: "butter",
          imgURL: "http://www.gretchensbakery.com/wp-content/uploads/2013/03/butter-3.jpg"
        },
        {
          id: 11,
          name: "cream cheese",
          imgURL: "http://www.finecooking.com/assets/uploads/posts/5239/ING-cream-cheese_sql.jpg"
        },
        {
          id: 12,
          name: "white sugar",
          imgURL: "http://img.aws.livestrongcdn.com/ls-article-image-673/cme/cme_public_images/www_livestrong_com/photos.demandstudios.com/getty/article/176/59/487573201_XS.jpg"
        },
        {
          id: 13,
          name: "milk",
          imgURL: "http://i.ndtvimg.com/i/2014-11/milk_625x300_41416559876.jpg"
        },
        {
          id: 14,
          name: "eggs",
          imgURL: "https://cdn.authoritynutrition.com/wp-content/uploads/2016/08/brown-and-white-eggs.jpg"
        },
        {
          id: 15,
          name: "vanilla extract",
          imgURL: "https://usercontent2.hubstatic.com/11969031.jpg"
        },
        {
          id: 16,
          name: "all-purpose flour",
          imgURL: "http://www.kingarthurflour.com/item-img/3005_03_29_2016__11_14_45_700"
        },
        {
          id: 17,
          name: "baking powder",
          imgURL: "http://sallysbakingaddiction.com/wp-content/uploads/2015/06/Sallys-Baking-Addiction-Baking-Powder-vs-Baking-Soda-2.jpg"
        },
        {
          id: 18,
          name: "white vinegar",
          imgURL: "https://images-na.ssl-images-amazon.com/images/I/41cfNe77u4L.jpg"
        },
        {
          id: 19,
          name: "baking soda",
          imgURL: "https://draxe.com/wp-content/uploads/2015/03/baking-soda-with-spoon-480x319.jpg"
        },
        {
          id: 20,
          name: "salt",
          imgURL: "http://images.wisegeek.com/spilled-salt-bottle-on-table.jpg"
        },
        {
          id: 21,
          name: "packed brown sugar",
          imgURL: "https://sc02.alicdn.com/kf/UT8c7eEXI4bXXagOFbXi/Brown-Sugar.jpg"
        },
        {
          id: 22,
          name: "ketchup",
          imgURL: "http://www.webstaurantstore.com/images/products/main/166705/314088/heinz-ketchup-14-oz-upside-down-squeeze-bottle-16-case.jpg"
        },
        {
          id: 23,
          name: "ground black pepper",
          imgURL: "http://www.thehomesteadgarden.com/wp-content/uploads/2013/12/black-pepper-1.jpg"
        },
        {
          id: 24,
          name: "ground ginger",
          imgURL: "http://s3.amazonaws.com/cme_public_images/www_livestrong_com/photos.demandstudios.com/getty/article/106/30/113475809_XS.jpg"
        },
        {
          id: 25,
          name: "saltine cracker crumbs",
          imgURL: "http://img.aws.livestrongcdn.com/ls-article-image-673/cme/cme_public_images/www_livestrong_com/photos.demandstudios.com/getty/article/106/31/453308573_XS.jpg"
        }
      ]);
    });
};
