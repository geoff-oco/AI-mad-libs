# AI Mad Libs Generator

A simple web-based Mad Libs game that generates funny and absurd short stories using user-inputted words and an AI-powered backend.

## Installation

### **1. Prerequisites**
- Python 3.x
- Flask
- OpenAI API key
- A web browser

### **2. Setup**
1. Clone this repository:
   ```sh
   git clone https://github.com/geoff-oco/ai-mad-libs.git
   cd ai-mad-libs
   ```

2. Create a virtual environment and install dependencies:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   - Rename `.env.example` to `.env`.
   - Add your OpenAI API key inside `.env`:
     ```
     OPENAI_API_KEY=your-api-key-here
     DEBUG=True
     ```

4. Run the backend server:
   ```sh
   python libsapp.py
   ```

5. Open `index.html` in a browser to use the web application.

## Usage

- Enter a **topic** and provide words (adjective, noun, verb, etc.).
- Click **"Generate Story!"** to create an AI-powered Mad Libs story.
- View and enjoy the generated story!
- Click **"Try Again"** to reset and create a new story.

## File Structure

- **Frontend**
  - `index.html` → Main webpage structure.
  - `style.css` → Styling for the webpage.
  - `madLibScript.js` → Handles user input and API calls.

- **Backend**
  - `libsapp.py` → Flask API for generating AI-driven stories.
  - `.env` → Stores API keys and environment settings (**excluded from Git**).
  - `requirements.txt` → List of Python dependencies.

## Contributing

If you'd like to contribute:
1. Fork the repository.
2. Create a new branch.
3. Make your changes and submit a pull request.

## Contact

For any questions or issues, reach out via GitHub: [geoff-oco](https://github.com/geoff-oco).
