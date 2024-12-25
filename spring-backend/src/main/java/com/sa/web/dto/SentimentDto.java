package com.sa.web.dto;

public class SentimentDto {

    private String text;        // The input text from the request
    private String sentiment;   // Sentiment analysis result (Positive, Negative, Neutral)
    private float score;        // Sentiment score (polarity)

    // Default constructor
    public SentimentDto() {
    }

    // Parameterized constructor
    public SentimentDto(String text, String sentiment, float score) {
        this.text = text;
        this.sentiment = sentiment;
        this.score = score;
    }

    // Getter and Setter for text
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    // Getter and Setter for sentiment
    public String getSentiment() {
        return sentiment;
    }

    public void setSentiment(String sentiment) {
        this.sentiment = sentiment;
    }

    // Getter and Setter for score
    public float getScore() {
        return score;
    }

    public void setScore(float score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "SentimentDto{" +
                "text='" + text + '\'' +
                ", sentiment='" + sentiment + '\'' +
                ", score=" + score +
                '}';
    }
}
