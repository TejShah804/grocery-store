const products = [
  {
    "id": 1,
    "name": "Green Apple",
    "price": 258,
    "image": "Img/p2.png",
    "category": "Fresh Fruit"
  },
  {
    "id": 2,
    "name": "Fresh Banana",
    "price": 1089,
    "image": "Img/p10.png",
    "category": "Fresh Fruit"
  },
  {
    "id": 3,
    "name": "Orange",
    "price": 216,
    "image": "Img/p9.png",
    "category": "Fresh Fruit"
  },
  {
    "id": 4,
    "name": "Mango",
    "price": 105,
    "image": "Img/p8.png",
    "category": "Fresh Fruit"
  },
  {
    "id": 5,
    "name": "Grapes",
    "price": 1115,
    "image": "Img/p7.png",
    "category": "Fresh Fruit"
  },
  {
    "id": 6,
    "name": "Watermelon",
    "price": 755,
    "image": "Img/p7.png",
    "category": "Fresh Fruit"
  },
  {
    "id": 7,
    "name": "Pineapple",
    "price": 740,
    "image": "Img/p3.png",
    "category": "Fresh Fruit"
  },
  {
    "id": 8,
    "name": "Pomegranate",
    "price": 1123,
    "image": "Img/p1.png",
    "category": "Fresh Fruit"
  },
  {
    "id": 9,
    "name": "Red Tomatoes",
    "price": 215,
    "image": "Img/p8.png",
    "category": "Fresh Vegetables"
  },
  {
    "id": 10,
    "name": "Big Potatoes",
    "price": 549,
    "image": "Img/p7.png",
    "category": "Fresh Vegetables"
  },
  {
    "id": 11,
    "name": "Onion",
    "price": 1390,
    "image": "Img/p6.png",
    "category": "Fresh Vegetables"
  },
  {
    "id": 12,
    "name": "Cabbage",
    "price": 1031,
    "image": "Img/p2.png",
    "category": "Fresh Vegetables"
  },
  {
    "id": 13,
    "name": "Fresh Cauliflower",
    "price": 619,
    "image": "Img/p4.png",
    "category": "Fresh Vegetables"
  },
  {
    "id": 14,
    "name": "Carrot",
    "price": 662,
    "image": "Img/p7.png",
    "category": "Fresh Vegetables"
  },
  {
    "id": 15,
    "name": "Spinach",
    "price": 389,
    "image": "Img/p4.png",
    "category": "Fresh Vegetables"
  },
  {
    "id": 16,
    "name": "Organic Broccoli",
    "price": 523,
    "image": "Img/p7.png",
    "category": "Fresh Vegetables"
  },
  {
    "id": 17,
    "name": "Chicken Breast",
    "price": 214,
    "image": "Img/p8.png",
    "category": "Meat & Fish"
  },
  {
    "id": 18,
    "name": "Fresh Mutton",
    "price": 608,
    "image": "Img/p1.png",
    "category": "Meat & Fish"
  },
  {
    "id": 19,
    "name": "Salmon Fish",
    "price": 1108,
    "image": "Img/p7.png",
    "category": "Meat & Fish"
  },
  {
    "id": 20,
    "name": "Prawns",
    "price": 1050,
    "image": "Img/p1.png",
    "category": "Meat & Fish"
  },
  {
    "id": 21,
    "name": "Beef Steak",
    "price": 395,
    "image": "Img/p3.png",
    "category": "Meat & Fish"
  },
  {
    "id": 22,
    "name": "Crab",
    "price": 558,
    "image": "Img/p3.png",
    "category": "Meat & Fish"
  },
  {
    "id": 23,
    "name": "Tuna",
    "price": 664,
    "image": "Img/p8.png",
    "category": "Meat & Fish"
  },
  {
    "id": 24,
    "name": "Lamb Chops",
    "price": 1149,
    "image": "Img/p2.png",
    "category": "Meat & Fish"
  },
  {
    "id": 25,
    "name": "Potato Chips",
    "price": 1344,
    "image": "Img/p10.png",
    "category": "Snacks"
  },
  {
    "id": 26,
    "name": "Nachos",
    "price": 830,
    "image": "Img/p5.png",
    "category": "Snacks"
  },
  {
    "id": 27,
    "name": "Biscuits",
    "price": 1131,
    "image": "Img/p6.png",
    "category": "Snacks"
  },
  {
    "id": 28,
    "name": "Cookies",
    "price": 1483,
    "image": "Img/p9.png",
    "category": "Snacks"
  },
  {
    "id": 29,
    "name": "Popcorn",
    "price": 677,
    "image": "Img/p5.png",
    "category": "Snacks"
  },
  {
    "id": 30,
    "name": "Namkeen",
    "price": 1039,
    "image": "Img/p1.png",
    "category": "Snacks"
  },
  {
    "id": 31,
    "name": "Chocolate Bar",
    "price": 1133,
    "image": "Img/p4.png",
    "category": "Snacks"
  },
  {
    "id": 32,
    "name": "Peanuts",
    "price": 764,
    "image": "Img/p2.png",
    "category": "Snacks"
  },
  {
    "id": 33,
    "name": "Cola",
    "price": 854,
    "image": "Img/p3.png",
    "category": "Beverages"
  },
  {
    "id": 34,
    "name": "Orange Juice",
    "price": 814,
    "image": "Img/p1.png",
    "category": "Beverages"
  },
  {
    "id": 35,
    "name": "Green Tea",
    "price": 1189,
    "image": "Img/p6.png",
    "category": "Beverages"
  },
  {
    "id": 36,
    "name": "Coffee Powder",
    "price": 1189,
    "image": "Img/p3.png",
    "category": "Beverages"
  },
  {
    "id": 37,
    "name": "Energy Drink",
    "price": 1410,
    "image": "Img/p2.png",
    "category": "Beverages"
  },
  {
    "id": 38,
    "name": "Mineral Water",
    "price": 1360,
    "image": "Img/p9.png",
    "category": "Beverages"
  },
  {
    "id": 39,
    "name": "Lemonade",
    "price": 1094,
    "image": "Img/p8.png",
    "category": "Beverages"
  },
  {
    "id": 40,
    "name": "Soy Milk",
    "price": 1059,
    "image": "Img/p7.png",
    "category": "Beverages"
  },
  {
    "id": 41,
    "name": "Fresh Milk",
    "price": 90,
    "image": "Img/p8.png",
    "category": "Dairy & Eggs"
  },
  {
    "id": 42,
    "name": "Butter",
    "price": 62,
    "image": "Img/p2.png",
    "category": "Dairy & Eggs"
  },
  {
    "id": 43,
    "name": "Cheese block",
    "price": 101,
    "image": "Img/p10.png",
    "category": "Dairy & Eggs"
  },
  {
    "id": 44,
    "name": "Yogurt",
    "price": 698,
    "image": "Img/p7.png",
    "category": "Dairy & Eggs"
  },
  {
    "id": 45,
    "name": "Paneer",
    "price": 1018,
    "image": "Img/p5.png",
    "category": "Dairy & Eggs"
  },
  {
    "id": 46,
    "name": "Brown Eggs",
    "price": 1351,
    "image": "Img/p7.png",
    "category": "Dairy & Eggs"
  },
  {
    "id": 47,
    "name": "White Eggs",
    "price": 263,
    "image": "Img/p10.png",
    "category": "Dairy & Eggs"
  },
  {
    "id": 48,
    "name": "Fresh Cream",
    "price": 502,
    "image": "Img/p7.png",
    "category": "Dairy & Eggs"
  },
  {
    "id": 49,
    "name": "White Bread",
    "price": 504,
    "image": "Img/p8.png",
    "category": "Bread & Bakery"
  },
  {
    "id": 50,
    "name": "Brown Bread",
    "price": 1102,
    "image": "Img/p6.png",
    "category": "Bread & Bakery"
  },
  {
    "id": 51,
    "name": "Croissant",
    "price": 416,
    "image": "Img/p7.png",
    "category": "Bread & Bakery"
  },
  {
    "id": 52,
    "name": "Muffins",
    "price": 675,
    "image": "Img/p7.png",
    "category": "Bread & Bakery"
  },
  {
    "id": 53,
    "name": "Chocolate Cake",
    "price": 744,
    "image": "Img/p10.png",
    "category": "Bread & Bakery"
  },
  {
    "id": 54,
    "name": "Burger Buns",
    "price": 547,
    "image": "Img/p3.png",
    "category": "Bread & Bakery"
  },
  {
    "id": 55,
    "name": "Baguette",
    "price": 1182,
    "image": "Img/p8.png",
    "category": "Bread & Bakery"
  },
  {
    "id": 56,
    "name": "Doughnut",
    "price": 981,
    "image": "Img/p2.png",
    "category": "Bread & Bakery"
  },
  {
    "id": 57,
    "name": "Basmati Rice",
    "price": 877,
    "image": "Img/p3.png",
    "category": "Grains & Pulses"
  },
  {
    "id": 58,
    "name": "Wheat Flour",
    "price": 1296,
    "image": "Img/p1.png",
    "category": "Grains & Pulses"
  },
  {
    "id": 59,
    "name": "Toor Dal",
    "price": 56,
    "image": "Img/p4.png",
    "category": "Grains & Pulses"
  },
  {
    "id": 60,
    "name": "Chana Dal",
    "price": 1429,
    "image": "Img/p1.png",
    "category": "Grains & Pulses"
  },
  {
    "id": 61,
    "name": "Oats",
    "price": 1020,
    "image": "Img/p1.png",
    "category": "Grains & Pulses"
  },
  {
    "id": 62,
    "name": "Quinoa",
    "price": 955,
    "image": "Img/p7.png",
    "category": "Grains & Pulses"
  },
  {
    "id": 63,
    "name": "Rajma",
    "price": 137,
    "image": "Img/p2.png",
    "category": "Grains & Pulses"
  },
  {
    "id": 64,
    "name": "Moong Dal",
    "price": 1152,
    "image": "Img/p3.png",
    "category": "Grains & Pulses"
  },
  {
    "id": 65,
    "name": "Turmeric Powder",
    "price": 905,
    "image": "Img/p10.png",
    "category": "Spices & Masala"
  },
  {
    "id": 66,
    "name": "Red Chili Powder",
    "price": 308,
    "image": "Img/p5.png",
    "category": "Spices & Masala"
  },
  {
    "id": 67,
    "name": "Garam Masala",
    "price": 461,
    "image": "Img/p4.png",
    "category": "Spices & Masala"
  },
  {
    "id": 68,
    "name": "Cumin Seeds",
    "price": 1095,
    "image": "Img/p4.png",
    "category": "Spices & Masala"
  },
  {
    "id": 69,
    "name": "Coriander Powder",
    "price": 1147,
    "image": "Img/p10.png",
    "category": "Spices & Masala"
  },
  {
    "id": 70,
    "name": "Black Pepper",
    "price": 826,
    "image": "Img/p1.png",
    "category": "Spices & Masala"
  },
  {
    "id": 71,
    "name": "Cinnamon",
    "price": 602,
    "image": "Img/p6.png",
    "category": "Spices & Masala"
  },
  {
    "id": 72,
    "name": "Cardamom",
    "price": 883,
    "image": "Img/p1.png",
    "category": "Spices & Masala"
  },
  {
    "id": 73,
    "name": "Sugar-Free Biscuits",
    "price": 1024,
    "image": "Img/p7.png",
    "category": "Diabetic Food"
  },
  {
    "id": 74,
    "name": "Diet Coke",
    "price": 935,
    "image": "Img/p3.png",
    "category": "Diabetic Food"
  },
  {
    "id": 75,
    "name": "Stevia Powder",
    "price": 441,
    "image": "Img/p2.png",
    "category": "Diabetic Food"
  },
  {
    "id": 76,
    "name": "Quinoa Flakes",
    "price": 1015,
    "image": "Img/p8.png",
    "category": "Diabetic Food"
  },
  {
    "id": 77,
    "name": "Diabetic Jam",
    "price": 1460,
    "image": "Img/p3.png",
    "category": "Diabetic Food"
  },
  {
    "id": 78,
    "name": "Low GI Rice",
    "price": 749,
    "image": "Img/p8.png",
    "category": "Diabetic Food"
  },
  {
    "id": 79,
    "name": "Oats",
    "price": 281,
    "image": "Img/p2.png",
    "category": "Diabetic Food"
  },
  {
    "id": 80,
    "name": "Sugar-Free Chocolate",
    "price": 516,
    "image": "Img/p9.png",
    "category": "Diabetic Food"
  },
  {
    "id": 81,
    "name": "Vim Liquid",
    "price": 505,
    "image": "Img/p1.png",
    "category": "Dish Detergents"
  },
  {
    "id": 82,
    "name": "Pril",
    "price": 1462,
    "image": "Img/p7.png",
    "category": "Dish Detergents"
  },
  {
    "id": 83,
    "name": "Surf Excel Bar",
    "price": 868,
    "image": "Img/p3.png",
    "category": "Dish Detergents"
  },
  {
    "id": 84,
    "name": "Scotch Brite",
    "price": 258,
    "image": "Img/p10.png",
    "category": "Dish Detergents"
  },
  {
    "id": 85,
    "name": "Dishwasher Tablets",
    "price": 378,
    "image": "Img/p2.png",
    "category": "Dish Detergents"
  },
  {
    "id": 86,
    "name": "Lemon Dish Wash",
    "price": 1472,
    "image": "Img/p3.png",
    "category": "Dish Detergents"
  },
  {
    "id": 87,
    "name": "Liquid Detergent",
    "price": 899,
    "image": "Img/p5.png",
    "category": "Dish Detergents"
  },
  {
    "id": 88,
    "name": "Scrubber",
    "price": 1182,
    "image": "Img/p3.png",
    "category": "Dish Detergents"
  },
  {
    "id": 89,
    "name": "Olive Oil",
    "price": 752,
    "image": "Img/p9.png",
    "category": "Oil"
  },
  {
    "id": 90,
    "name": "Sunflower Oil",
    "price": 1147,
    "image": "Img/p4.png",
    "category": "Oil"
  },
  {
    "id": 91,
    "name": "Mustard Oil",
    "price": 998,
    "image": "Img/p8.png",
    "category": "Oil"
  },
  {
    "id": 92,
    "name": "Coconut Oil",
    "price": 1153,
    "image": "Img/p4.png",
    "category": "Oil"
  },
  {
    "id": 93,
    "name": "Groundnut Oil",
    "price": 458,
    "image": "Img/p6.png",
    "category": "Oil"
  },
  {
    "id": 94,
    "name": "Rice Bran Oil",
    "price": 1461,
    "image": "Img/p10.png",
    "category": "Oil"
  },
  {
    "id": 95,
    "name": "Sesame Oil",
    "price": 935,
    "image": "Img/p1.png",
    "category": "Oil"
  },
  {
    "id": 96,
    "name": "Palm Oil",
    "price": 734,
    "image": "Img/p5.png",
    "category": "Oil"
  }
];

export default products;
