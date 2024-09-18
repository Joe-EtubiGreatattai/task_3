// src/App.js
import React from 'react';
import './App.css';
import Posts from './components/Posts';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My API App</h1>
            </header>
            <main>
                <Posts />
            </main>
        </div>
    );
}

export default App;
