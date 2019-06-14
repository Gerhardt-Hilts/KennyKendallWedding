// Libraries
import React from 'react';

// Components
import AppFooter from './components/AppFooter/AppFooter';
import AppHeader from './components/AppHeader/AppHeader';

// Styles
import './App.scss';


// Initialize App
const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader/>
        <div className={'container'}>
          <div>Contained</div>
        </div>
      <AppFooter/>
    </div>
  );
};

export default App;
