const affirmationText = document.getElementById('affirmation');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {
  fetch('https://www.affirmations.dev/')
    .then(response => response.json())
    .then(data => {
      affirmationText.textContent = data.affirmation;
    })
    .catch(error => {
      console.error('Error fetching affirmation:', error);
      affirmationText.textContent = "Failed to fetch an affirmation. Please try again!";
    });
});
