import React, {Component} from "react";
// import {render} from 'react-dom';
import './App.css';
import Page1 from './pages/page1'
import list from './pages/list'
import Page3 from './pages/page3'
import {BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import test from './pages/test'

class App extends Component {

    render () {

  return (

          <BrowserRouter>
              <nav >
                  <ul className={'wrap'}>
                      <li><NavLink activeClassName="active" to={"/page/1"}>PAGE1</NavLink></li>
                      <li><NavLink activeClassName="active" to={"/page/2"}>LIST</NavLink></li>
                      <li><NavLink activeClassName="active" to={"/page/3"}>PAGE3</NavLink></li>
                  </ul>
              </nav>

<Switch >
           <Route path="/page/1" component={Page1}/>
           <Route path="/page/2" component={list}/>
           <Route path="/page/3" component={Page3}/>
           <Route path="/post/:id" component={test}/>
</Switch>
          </BrowserRouter>

  );
}
}

export default App;
