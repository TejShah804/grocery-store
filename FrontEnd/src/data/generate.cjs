const fs = require('fs');
const categories = [
  'Fresh Fruit', 'Fresh Vegetables', 'Meat & Fish', 'Snacks', 
  'Beverages', 'Dairy & Eggs', 'Bread & Bakery', 'Grains & Pulses', 
  'Spices & Masala', 'Diabetic Food', 'Dish Detergents', 'Oil'
];
let products = [];
let id = 1;
categories.forEach(cat => {
  for (let i = 1; i <= 8; i++) {
    products.push({
      id: id++,
      name: cat + ' Item ' + i,
      price: Math.floor(Math.random() * (1500 - 50 + 1) + 50),
      image: 'Img/p' + (Math.floor(Math.random() * 10) + 1) + '.png',
      category: cat
    });
  }
});
const content = "const products = " + JSON.stringify(products, null, 2) + ";\n\nexport default products;\n";
fs.writeFileSync('D:/LogicSync/ecobazar/FrontEnd/src/data/product.jsx', content);
