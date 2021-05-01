import React, { Component } from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import { Home, About, Posts, Demos, FourZeroFour } from './Pages/Pages'; 

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/posts' component={Posts}/>
                    <Route exact path='/demos' component={Demos}/>
                    <Route exact path='/about' component={About}/>
                    <Route component={FourZeroFour}/>
                </Switch>
            </BrowserRouter>
        ); 
    }
}

export default App; 