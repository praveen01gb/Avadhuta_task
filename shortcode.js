const encodeURL = (longURL) => {
  // Generate a unique short code, for example, using hashing or encoding
  const shortCode = generateShortCode(longURL);

  // Construct the shortened URL using the short code
  const shortURL = `https://yourdomain.com/${shortCode}`;

  // Store the mapping of short code to long URL (e.g., in a database)
  // For demonstration purposes, we'll store it in a simple object
  const urlMap = {};
  urlMap[shortCode] = longURL;

  return shortURL;
};

// Helper function to generate a unique short code
const generateShortCode = (longURL) => {
  // Implement your own logic to generate a short code, such as hashing
  const hash = hashFunction(longURL);
  return hash.substring(0, 6); // Example: Use first 6 characters of the hash
};

// Example hash function (can be more robust depending on requirements)
const hashFunction = (str) => {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString();
};

// Decode URL function
const decodeURL = (shortURL) => {
  const shortCode = shortURL.split('/').pop();
  const urlMap = {}; // Assume this is the same object used in encodeURL
  return urlMap[shortCode];
};

// Test the encodeURL and decodeURL functions
const longURL = "https://www.example.com/very/long/url";
const shortURL = encodeURL(longURL);

console.log(`Original URL: ${longURL}`);
console.log(`Shortened URL: ${shortURL}`);

const decodedURL = decodeURL(shortURL);
console.log(`Decoded URL: ${decodedURL}`);
