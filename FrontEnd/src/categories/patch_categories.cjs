const fs = require('fs');
const path = require('path');

const categoriesMap = {
  'Beverages.jsx': 'Beverages',
  'BreadAndBakery.jsx': 'Bread & Bakery',
  'DairyAndEggs.jsx': 'Dairy & Eggs',
  'DiabeticFood.jsx': 'Diabetic Food',
  'DishDetergents.jsx': 'Dish Detergents',
  'FreshFruit.jsx': 'Fresh Fruit',
  'FreshVegetables.jsx': 'Fresh Vegetables',
  'GrainsAndPulses.jsx': 'Grains & Pulses',
  'MeatAndFish.jsx': 'Meat & Fish',
  'Oil.jsx': 'Oil',
  'Snacks.jsx': 'Snacks',
  'SpicesAndMasala.jsx': 'Spices & Masala'
};

const dir = 'D:/LogicSync/ecobazar/FrontEnd/src/categories';

Object.keys(categoriesMap).forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Add import if not exists
  if (!content.includes('import products from')) {
    content = content.replace(
      'import { CartContext } from "../context/CartContext";',
      'import { CartContext } from "../context/CartContext";\nimport products from "../data/product";'
    );
  }

  // Replace hardcoded array with dynamic filtering
  const categoryName = categoriesMap[file];
  const regex = /const categoryProducts = \[\s*\{[\s\S]*?\];/;
  
  if (regex.test(content)) {
    content = content.replace(regex, `const categoryProducts = products.filter(p => p.category === "${categoryName}");`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`Array not found in ${file}`);
  }
});
