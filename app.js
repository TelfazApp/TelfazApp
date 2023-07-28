// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';

// Your Firebase configuration directly in app.js (replace the placeholders with your actual Firebase config)
const firebaseConfig = {
  apiKey: 'AIzaSyAc4r2MjNmiPF-35vlx4H-HGcmKMw0nCGc',
  authDomain: 'databasemjeed.firebaseapp.com',
  projectId: 'databasemjeed',
  storageBucket: 'databasemjeed.appspot.com',
  messagingSenderId: '1032574225285',
  appId: '1032574225285',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

// Function to generate a random alphanumeric code (same as before)
function generateCode(length) {
  // ...
}

// Function to add a new code with an expiration date of 30 days from the activation date (same as before)
async function addCode() {
  // ...
}

// Function to display the generated codes on the webpage (same as before)
function displayCodes(codesData) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = ''; // Clear the previous codes

  if (codesData.length > 0) {
    codesData.forEach((codeData) => {
      const { code, expirationDate } = codeData;
      const codeElement = document.createElement('p');
      codeElement.innerHTML = `Generated Code: ${code}<br>Expiration Date: ${expirationDate}`;
      outputDiv.appendChild(codeElement);
    });
  } else {
    outputDiv.innerHTML = '<p>No codes generated yet.</p>';
  }

  // Print "Button Pressed!" message to the outputDiv
  const messageElement = document.createElement('p');
  messageElement.textContent = 'Button Pressed!';
  outputDiv.appendChild(messageElement);
}
// Wait for DOM content to load before setting up event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Function to handle button click and generate codes (same as before)
  document.getElementById('generateButton').addEventListener('click', async () => {
    // ...
  });
});
