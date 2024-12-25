from flask import Flask, request, jsonify
from textblob import TextBlob

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    try:
        # Get the JSON data from the request
        data = request.get_json()

        # Ensure the text field exists
        if 'text' not in data:
            return jsonify({"error": "Missing 'text' field in request"}), 400

        # Perform sentiment analysis using TextBlob
        text = data['text']
        analysis = TextBlob(text)
        sentiment_score = analysis.sentiment.polarity

        # Determine sentiment label
        if sentiment_score > 0:
            sentiment = "Positive"
        elif sentiment_score < 0:
            sentiment = "Negative"
        else:
            sentiment = "Neutral"

        # Return the response
        response = {
            "text": text,
            "sentiment": sentiment,
            "score": sentiment_score
        }
        return jsonify(response), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)