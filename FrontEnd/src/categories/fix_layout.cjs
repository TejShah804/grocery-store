const fs = require('fs');
const path = require('path');

const dir = 'D:/LogicSync/ecobazar/FrontEnd/src/categories';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove Footer import
  content = content.replace(/import Footer from "\.\.\/component\/footer\/footer";\n?/, '');

  // Remove <Footer />
  content = content.replace(/<Footer \/>\n?\s*/g, '');

  // Change columns from `col-md-3 col-lg-2` or similar to `col-6 col-md-4 col-lg-3`
  // Some files might just have `col-md-3 col-lg-2`
  content = content.replace(/className="col-md-3 col-lg-2"/g, 'className="col-6 col-md-4 col-lg-3"');
  
  // Just in case it has some other variation, maybe try a broader regex, but let's see if this matches
  // The files were identical copies earlier.

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
