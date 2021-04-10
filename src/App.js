import React from "react";
import Contact from "./pages/Contact/contact"
import Portfolio from "./pages/Portfolio/portfolio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

 function App() {
  return (
   <div>
    
    <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    </Router>

  </div>
  );
}

export default App;
