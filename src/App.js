import './App.css';
import Navbar from "./components/navbar/Navbar";
import Brands from './containers/brands/Brands';
import Header from './containers/header/Header';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brands />
      <WhatGPT3 />
    </div>
  );
}

export default App;
