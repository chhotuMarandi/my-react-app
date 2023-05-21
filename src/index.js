import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';


function Page () {
  return (
    <div className='main-container'>
      <div className='wrapper'>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById('root'))