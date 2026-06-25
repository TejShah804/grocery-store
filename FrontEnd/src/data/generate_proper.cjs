const fs = require('fs');

const itemsData = {
  'Fresh Fruit': ['Green Apple', 'Fresh Banana', 'Orange', 'Mango', 'Grapes', 'Watermelon', 'Pineapple', 'Pomegranate'],
  'Fresh Vegetables': ['Red Tomatoes', 'Big Potatoes', 'Onion', 'Cabbage', 'Fresh Cauliflower', 'Carrot', 'Spinach', 'Organic Broccoli'],
  'Meat & Fish': ['Chicken Breast', 'Fresh Mutton', 'Salmon Fish', 'Prawns', 'Beef Steak', 'Crab', 'Tuna', 'Lamb Chops'],
  'Snacks': ['Potato Chips', 'Nachos', 'Biscuits', 'Cookies', 'Popcorn', 'Namkeen', 'Chocolate Bar', 'Peanuts'],
  'Beverages': ['Cola', 'Orange Juice', 'Green Tea', 'Coffee Powder', 'Energy Drink', 'Mineral Water', 'Lemonade', 'Soy Milk'],
  'Dairy & Eggs': ['Fresh Milk', 'Butter', 'Cheese block', 'Yogurt', 'Paneer', 'Brown Eggs', 'White Eggs', 'Fresh Cream'],
  'Bread & Bakery': ['White Bread', 'Brown Bread', 'Croissant', 'Muffins', 'Chocolate Cake', 'Burger Buns', 'Baguette', 'Doughnut'],
  'Grains & Pulses': ['Basmati Rice', 'Wheat Flour', 'Toor Dal', 'Chana Dal', 'Oats', 'Quinoa', 'Rajma', 'Moong Dal'],
  'Spices & Masala': ['Turmeric Powder', 'Red Chili Powder', 'Garam Masala', 'Cumin Seeds', 'Coriander Powder', 'Black Pepper', 'Cinnamon', 'Cardamom'],
  'Diabetic Food': ['Sugar-Free Biscuits', 'Diet Coke', 'Stevia Powder', 'Quinoa Flakes', 'Diabetic Jam', 'Low GI Rice', 'Oats', 'Sugar-Free Chocolate'],
  'Dish Detergents': ['Vim Liquid', 'Pril', 'Surf Excel Bar', 'Scotch Brite', 'Dishwasher Tablets', 'Lemon Dish Wash', 'Liquid Detergent', 'Scrubber'],
  'Oil': ['Olive Oil', 'Sunflower Oil', 'Mustard Oil', 'Coconut Oil', 'Groundnut Oil', 'Rice Bran Oil', 'Sesame Oil', 'Palm Oil']
};

let products = [];
let id = 1;

for (const [cat, items] of Object.entries(itemsData)) {
  items.forEach((itemName, index) => {
    products.push({
      id: id++,
      name: itemName,
      price: Math.floor(Math.random() * (1500 - 50 + 1) + 50),
      image: 'Img/p' + (Math.floor(Math.random() * 10) + 1) + '.png',
      category: cat
    });
  });
}

const content = "const products = " + JSON.stringify(products, null, 2) + ";\n\nexport default products;\n";
fs.writeFileSync('D:/LogicSync/ecobazar/FrontEnd/src/data/product.jsx', content);
