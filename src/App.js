import React from 'react';
import './App.css'
import Users from './components/Users/Users'
import StartPage from '../src/components/StartPage/StartPage';
import { BrowserRouter, Route } from 'react-router-dom'
import Settings from './components/Settings/Settings';
import Game from './components/Game/Game'


export default function App() {
  
  return (
          <div className="App">
            <BrowserRouter>
              <div className="App">
                <Route path='//' component = { StartPage } />
                <Route path='/formUser/' component = { Users } />
                <Route path='/Settings/' component = { Settings } />
                <Route path='/game/' component = { Game} />
              </div>
            </BrowserRouter>
          </div>
          );
}


