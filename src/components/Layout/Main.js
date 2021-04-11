import React, { Component } from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import Home from '../Pages/Home'; 
import About from '../Pages/About'; 


class Main extends Component {
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/about' component={About}/>
            </Switch>
        )
    }
}

export default Main; 