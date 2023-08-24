import React, { Component } from 'react'; 
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'; 
import { Home, About, Posts, Projects, FourZeroFour } from './Pages/Pages'; 
import { ThemeProvider } from '@mui/material/styles';
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

  componentWillUnmount(){
    offThemeToggle(this.themeToggleCb)
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme == "dark" ? darkTheme : lightTheme}>
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