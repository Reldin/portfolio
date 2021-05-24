import React from 'react';

import "./App.css";

import Header from "./components/layout/Header";
import FrontPage from "./pages/FrontPage";
import Footer from './components/layout/Footer';

function App() {


  return (
    <div className="App">
      <Header />
      <FrontPage />
      <Footer />
    </div>
  );
}

export default App;
