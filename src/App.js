import React from 'react';
import {} from 'reactstrap'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// importing pages
import Home from './pages/Home'
import Items from './pages/Items'
import Users from './pages/Users'
import Category from './pages/Category'
import HomePage from './pages/HomePage'
import HomePageLogin from './pages/HomePage-login'
import Login from './pages/Login'
import Register from './pages/Register'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/homepage' component={HomePage} />
          <Route path='/homepage-login' component={HomePageLogin} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path="/" component={Home} exact />
          <Route path="/category" component={Category} />
          <Route path="/items" component={Items} />
          <Route path="/users" component={Users} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
