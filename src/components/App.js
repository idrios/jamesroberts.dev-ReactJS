import React, { Component } from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import About from './Pages/About';
import FourZeroFour from './Pages/404'; 

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/demos' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route component={FourZeroFour}/>
                </Switch>
            </BrowserRouter>
        ); 
    }
}

export default App; 