import React, { Component } from 'react'; 
import { Router, Route, Link } from 'react-router-dom'; 
import Main from './Main'; 
import Header from './Layout/Header'; 
import Home from './Pages/Home';
import About from './Pages/About';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        ); 
    }
}

export default App; 