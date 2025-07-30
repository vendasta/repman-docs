const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function validateYamlFrontMatter(dir) {
  const files = fs.readdirSync(dir);
  let hasErrors = false;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (validateYamlFrontMatter(filePath)) {
        hasErrors = true;
      }
    } else if (file.endsWith('.mdx')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const parsed = matter(content);
        console.log(`✓ ${filePath} - YAML valid`);
      } catch (error) {
        console.error(`✗ ${filePath} - YAML error:`, error.message);
        hasErrors = true;
      }
    }
  });

  return hasErrors;
}

console.log('Validating YAML front matter in all MDX files...');
const hasErrors = validateYamlFrontMatter('docs');

if (hasErrors) {
  console.log('\n❌ Found YAML parsing errors!');
  process.exit(1);
} else {
  console.log('\n✅ All YAML front matter is valid!');
} 