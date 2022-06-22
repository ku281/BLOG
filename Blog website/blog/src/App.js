//import logo from './logo.svg';
//import './App.css';
import React from 'react';
//import Header from './Component/Header';
//import Home from './Component/home/Home';

import AppWithRouterAccess from './AppWithRouterAccess';
//import AppWithRouterAccess from './AppWithRouterAccess';
//import DetailView from './Component/Post/DetailView';
//import CreateView  from './Component/Post/CreateView';
//import UpdateView from './Component/Post/UpdateView';
//import {BrowserRouter,Switch} from 'react-dom';
import {Box} from '@material-ui/core';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
//import SwitchBase from '@material-ui/core/internal/SwitchBase';
const App =()=>
{
  return (
    <BrowserRouter>
    <AppWithRouterAccess>
    {/*<Header/>*/}
     {/*<Box style={{marginTop:64}}>
     <Switch>
  
    
  <Route exact path="/" component={Home}/>
  <Route  exact path ="/details/:id" component={DetailView}/>
  <Route exact path="/create" component={CreateView}/>
  <Route exact path="/update/:id" component={UpdateView}/>
   </Switch>
  </Box>*/}
  </AppWithRouterAccess>
    </BrowserRouter>
    
  )
  }

export default App;
