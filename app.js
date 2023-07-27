// Get a reference to the Firestore database
const db = firebase.firestore();

// Function to generate a random alphanumeric code
function generateCode(length) {
  // ... (same as the previous code)
}

// Function to add a new code with an expiration date of 30 days from the activation date
async function addCode() {
  const code = generateCode(15);
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);

  try {
    await db.collection('codes').doc(code).set({ expirationDate: expirationDate.getTime(), activated: false });
    return { code, expirationDate };
  } catch (error) {
    console.error('Error adding code:', error);
    return null;
  }
}

// Function to display the generated code and expiration date
function displayCode(codeData) {
  const outputDiv = document.getElementById('output');

  if (codeData) {
    const { code, expirationDate } = codeData;
    outputDiv.innerHTML = `
      <p>Generated Code: ${code}</p>
      <p>Expiration Date: ${expirationDate}</p>
    `;
  } else {
    outputDiv.innerHTML = '<p>Error generating code.</p>';
  }
}

// Function to handle button click and generate code
document.getElementById('generateButton').addEventListener('click', async () => {
  const codeData = await addCode();
  displayCode(codeData);
});
