import React, { Component, useState } from 'react'; 
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'; 
import { Home, About, Posts, Projects, FourZeroFour } from './Pages/Pages'; 
import { ThemeProvider } from '@material-ui/core/styles';
import { getCurrentTheme, lightTheme, darkTheme, onThemeToggle, offThemeToggle } from '../providers/theme';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {theme: getCurrentTheme()}
  }

  componentDidMount(){
    this.themeToggleCb = () => {
      this.setState({theme: getCurrentTheme()})
    }
    onThemeToggle(this.themeToggleCb)
  }

  componentDidUpdate(){
    console.log("Updated:: " + this.state.theme)
  }

  componentWillUnmount(){
    offThemeToggle(this.themeToggleCb)
  }

  getTheme(){
    console.log("getting theme")
    let theme =  this.state.theme == "dark" ? darkTheme : lightTheme
    console.log(theme.palette.primary)
    return theme
  }

  render() {
    return (
      <ThemeProvider theme={this.getTheme()}>
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
      </ThemeProvider>
    ); 
  }
}

export default App; 