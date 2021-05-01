import React, { Component } from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import { Home, About, FourZeroFour } from './Pages/Pages.js'; 

class Body extends Component {
    constructor() {
        super(); 
    }

    render(){
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/demos' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route component={FourZeroFour}/>
            </Switch>
        )
    }
}

export default Body; 