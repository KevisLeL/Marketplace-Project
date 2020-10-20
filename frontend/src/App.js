import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import PaymentPage from './Pages/PaymentPage';


function App() {
  return (
    
    <React.Fragment>
      <BrowserRouter>
      <Navbar />

      <Switch>
      <Route path="/" exact component={HomePage} />
        
      <Route path="/payment" exact component={PaymentPage} />
     
      </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
