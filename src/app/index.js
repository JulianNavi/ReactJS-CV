import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
