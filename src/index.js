import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';


function App () {
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

ReactDOM.render(<App />, document.getElementById('root'))