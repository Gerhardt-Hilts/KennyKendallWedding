// Libraries
import React from 'react';

// Components
import AppFooter from './components/AppFooter/AppFooter';
import AppHeader from './components/AppHeader/AppHeader';
import AppMediaContainer from "./components/AppMediaContainer/AppMediaContainer";
import SubjectsContainer from "./components/SubjectsContainer/SubjectsContainer";
import AppGrid from "./components/AppGrid/AppGrid";
// import Bio from "./components/Bio/Bio";

// Styles
import './App.scss';


// Initialize App
const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader/>
        <div className={'container'}>
          <SubjectsContainer>
            <AppMediaContainer/>
            <AppMediaContainer/>
          </SubjectsContainer>
          <AppGrid>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
            <AppMediaContainer/>
          </AppGrid>
        </div>
      <AppFooter/>
    </div>
  );
};

export default App;
