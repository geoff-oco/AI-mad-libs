from flask import Flask, request, jsonify
from flask_cors import CORS  # Handle cross-origin requests
import requests  # For making API calls
from openai import OpenAI # Import OpenAI module
from dotenv import load_dotenv
import os

load_dotenv() #Load dot env

app = Flask(__name__)
CORS(app, resources={r"/generate-story": {"origins": "*"}})  # Restrict origins

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
    )
 # Set OpenAI API key)

@app.route('/generate-story', methods=['POST']) # routing for generate-story endpoint
def generate_story():

    try:
        # Get JSON data from frontend
        data = request.json
        words = data['words'] # pull words from the data
        topic = data['topic'] # pull topic from the data

        # Construct the prompt
        prompt = f"Write a 150-word funny {topic} story. Use these words: {', '.join(words)}. Make it absurd and creative."

        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "user", "content": prompt}
                ]
            )

        # Extract generated text from the response:
        story = completion.choices[0].message.content
        print(story)
        return jsonify({"story": story})

    except Exception as e:
        print(f"Error during API call: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    debug_mode = os.getenv("DEBUG", "False").lower() == "true"
    app.run(debug=debug_mode)