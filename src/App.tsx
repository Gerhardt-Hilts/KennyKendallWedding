// Libraries
import React from 'react';

// Components
import AppFooter from './components/AppFooter/AppFooter';
import AppMediaContainer from './components/AppMediaContainer/AppMediaContainer';
import AppGridContainer from './components/AppGridContainer/AppGridContainer';
import AppHeader from './components/AppHeader/AppHeader';
import PortraitsContainer from "./components/PortraitsContainer/PortraitsContainer";

// Styles
import './App.scss';


// Initialize App
const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader/>
      <PortraitsContainer/>
      <AppGridContainer>
        <AppMediaContainer/>
        <AppMediaContainer/>
        <AppMediaContainer/>
        <AppMediaContainer/>
        <AppMediaContainer/>
        <AppMediaContainer/>
      </AppGridContainer>
      <AppFooter/>
    </div>
  );
};

export default App;
