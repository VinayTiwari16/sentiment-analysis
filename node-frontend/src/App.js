import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
    marginLeft: 12,
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            sentiment: '',
            score: undefined,
        };
    }

    analyzeSentence = () => {
        // The backend is running on http://localhost:8080/sentiment
        fetch('http://localhost:8080/sentiment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: this.textField.getValue() }) // Send the text field value
        })
            .then(response => response.json()) // Expecting a JSON response
            .then(data => 
                this.setState({
                    text: data.text,
                    sentiment: data.sentiment,
                    score: data.score,
                })
            ) // Update state with the response
            .catch(error => console.error('Error:', error)); // Handle any errors
    };

    onEnterPress = (e) => {
        if (e.key === 'Enter') {
            this.analyzeSentence();
        }
    };

    render() {
        const { text, sentiment, score } = this.state;

        return (
            <MuiThemeProvider>
                <div className="centerize">
                    <Paper zDepth={1} className="content">
                        <h2>Enter a Message</h2>
                        <TextField
                            ref={(ref) => (this.textField = ref)}
                            onKeyUp={this.onEnterPress}
                            hintText="Type your sentence."
                        />
                        <RaisedButton
                            label="Analyze"
                            style={style}
                            onClick={this.analyzeSentence}
                        />
                        {/* Display the response */}
                        {text && (
                            <div style={{ marginTop: 20 }}>
                                <h3>Analysis Result:</h3>
                                <p><strong>Text:</strong> {text}</p>
                                <p><strong>Sentiment:</strong> {sentiment}</p>
                                <p><strong>Score:</strong> {score}</p>
                            </div>
                        )}
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
