// Debug script for character file
import fs from 'fs';

try {
  // Read the character file
  const characterPath = './characters/taostats.character.json';
  const content = fs.readFileSync(characterPath, 'utf8');
  console.log('Successfully read file');
  
  // Try to parse it
  const character = JSON.parse(content);
  console.log('Successfully parsed JSON');
  
  // Check key structure
  console.log('Character keys:', Object.keys(character));
  
  // Check types of each field
  for (const key of Object.keys(character)) {
    console.log(`${key} is type: ${typeof character[key]}`);
    if (typeof character[key] === 'object' && character[key] !== null) {
      if (Array.isArray(character[key])) {
        console.log(`  ${key} is an array of length ${character[key].length}`);
        if (character[key].length > 0) {
          console.log(`  First item type: ${typeof character[key][0]}`);
        }
      } else {
        console.log(`  ${key} sub-keys:`, Object.keys(character[key]));
      }
    }
  }

  // Check style specifically
  if (character.style) {
    console.log('Style details:');
    for (const styleKey of Object.keys(character.style)) {
      const value = character.style[styleKey];
      console.log(`  style.${styleKey} is type: ${typeof value}`);
      if (Array.isArray(value)) {
        console.log(`    Array length: ${value.length}`);
        console.log(`    First item: ${value[0]}`);
      } else {
        console.log(`    Value: ${value}`);
      }
    }
  }
  
  // Test for primitive conversion that's failing
  try {
    const testStr = '' + character.plugins;
    console.log('Plugins can be converted to string:', testStr);
  } catch (e) {
    console.log('Error converting plugins to string:', e.message);
  }
  
} catch (error) {
  console.error('Error:', error.message);
} 