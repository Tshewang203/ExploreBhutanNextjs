const bcrypt = require('bcryptjs');

async function verifyPassword() {
  const storedHash = '$2b$10$sHscwNjG0kDUwQE06eUPIOt59HnOEu3Ae4Dd7cOYrEHRZ6gnJzxeW';
  const testPassword = 'adminBhutan';
  
  const isValid = await bcrypt.compare(testPassword, storedHash);
  console.log('Testing password "adminBhutan":', isValid);
}

verifyPassword();

async function generateHash() {
  const password = 'adminBhutan';
  const hash = await bcrypt.hash(password, 10);
  console.log('Generated hash:', hash);
  
  // Verify the hash
  const isValid = await bcrypt.compare(password, hash);
  console.log('Hash verification:', isValid);
  
  return hash;
}

generateHash();