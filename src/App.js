import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import Css from './Pages/Css';


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/css3" component={Css} />
      </Switch>
    </BrowserRouter>

  )
}

export default App;
