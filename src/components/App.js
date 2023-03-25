import React, { Component } from 'react'; 
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'; 
import { Home, About, Posts, Projects, FourZeroFour } from './Pages/Pages'; 

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' 
                        render={() => {
                            return window.location.search 
                                ? <Redirect to={window.location.search.split("?")[1]}/>
                                : <Home/>
                        }}
                    />
                    <Route exact path='/home' render={() => <Redirect to="/"/>}/>
                    <Route exact path='/posts' component={Posts}/>
                    <Route exact path='/projects' component={Projects}/>
                    <Route exact path='/about' component={About}/>
                    <Route component={FourZeroFour}/>
                </Switch>
            </BrowserRouter>
        ); 
    }
}

export default App; 