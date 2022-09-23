import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import India from "./Components/India";
import World from "./Components/World";
import { BrowserRouter , Route, Routes } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        
        <BrowserRouter>
        <Header />
          <Routes>
         

          <Route exact path="/"  element={<India />}>
            
          </Route>
          <Route path="/india"  element={<India />}>
            
          </Route>
          <Route path="/world"  element={ <World />}>
           
          </Route>
          </Routes>
          </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
