// Code to display the main page of the website
import { useState } from 'react';
import './App.css';
import HeadContainer from './headContainer/headContainer.js';
import BodyContainer from './bodyContainer/bodyContainer.js';
import FootContainer from './footContainer/footContainer.js';

function App() {
  const [content, setContent] = useState('about');

  const handleNavClick = (navClick) => {
    setContent(navClick);
  }

  return (
    <div className="App">
      <HeadContainer className="head" onNavClick={handleNavClick}/>
      <BodyContainer className="body" content={content}/>
      <FootContainer className="foot"/>
    </div>
  );
}

export default App;
