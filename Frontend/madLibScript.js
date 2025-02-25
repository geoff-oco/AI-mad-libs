// DOM Elements
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');
const topicInput = document.getElementById('topic');
const wordInputs = document.querySelectorAll('.word-inputs input');
const storyOutput = document.getElementById('storyOutput');
const storySection = document.querySelector('.story-section');

// Event Listeners
generateBtn.addEventListener('click', async () => {
    // Get input values
    const topic = topicInput.value;
    const words = Array.from(wordInputs).map(input => input.value);

    // Basic validation
    if (!topic || words.some(word => !word)) {
        alert('Please fill all fields!');
        return;
    }

    try {
        // Show loading state
        generateBtn.textContent = 'Generating...';
        
        // Call backend API
        const response = await fetch('http://localhost:5000/generate-story', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ topic, words })
        });

        if (!response.ok) throw new Error('API call failed');
        
        // Display story
        const data = await response.json();
        storyOutput.innerHTML = data.story.replace(/\n/g, '<br>');
        storySection.classList.remove('hidden');
    } catch (error) {
        alert(`Error: ${error.message}`);
    } finally {
        generateBtn.textContent = 'Generate Story!';
    }
});

// Reset button handler
resetBtn.addEventListener('click', () => {
    storySection.classList.add('hidden');
    topicInput.value = '';
    wordInputs.forEach(input => input.value = '');
});