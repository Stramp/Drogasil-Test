import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import Css from './Pages/Css';
import HtmlC from './Pages/Html';
import JsC from './Pages/JavaScript';
import Redux from './Pages/Redux';
import ReactC from './Pages/React';


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/css3" component={Css} />
        <Route path="/html5" component={HtmlC} />
        <Route path="/javascript" component={JsC} />
        <Route path="/redux" component={Redux} />
        <Route path="/react" component={ReactC} />
      </Switch>
    </BrowserRouter>

  )
}

export default App;
