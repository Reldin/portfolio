import React from 'react';

import "./App.css";

import Header from "./components/layout/Header";
import FrontPage from "./pages/FrontPage";

function App() {


  return (
    <div className="App">
      <Header />
      <FrontPage />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
