const fs = require('fs');
const path = require('path');

function replaceInFile(filepath, searchValue, replaceValue) {
  const fullPath = path.join(__dirname, filepath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(searchValue, replaceValue);
    fs.writeFileSync(fullPath, content);
  }
}

// Fix areas
const areas = ['nashville', 'franklin', 'brentwood', 'murfreesboro', 'hendersonville', 'mt-juliet', 'spring-hill', 'gallatin'];
for (const area of areas) {
  const file = `src/app/areas/${area}-tn/page.tsx`;
  const name = area.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  replaceInFile(file, /\{cityName\}/g, name);
}

console.log("Fixes applied again!");
