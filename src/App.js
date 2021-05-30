import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Header from "./components/layout/Header";
import FrontPage from "./pages/FrontPage";
import Footer from "./components/layout/Footer";
import MiniProject from "./pages/MiniProject";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/front-page" />
        </Route>
        <Route path="/front-page">
          <FrontPage />
        </Route>
        <Route path="/mini-project">
          <MiniProject />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
