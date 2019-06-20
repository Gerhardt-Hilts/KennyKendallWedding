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
import PhotoCard from "./components/PhotoCard/PhotoCard";

import KennyTeel from './assets/img/kenny_headshot.jpg';
import KendallTeel from './assets/img/kendall_headshot.jpg';
import Bio from "./components/Bio/Bio";

// Initialize App
const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader/>
        <div className={'container'}>
          <SubjectsContainer>
            <AppMediaContainer imageSource={KennyTeel}>
              <Bio name={'Kenny Teel'} info={'There\'s something about kenny teel'} />
            </AppMediaContainer>
            <AppMediaContainer imageSource={KendallTeel}>
              <Bio name={'Kendall Teel'} info={'There\'s something about kendall teel'}/>
            </AppMediaContainer>
          </SubjectsContainer>
          <AppGrid>
            <PhotoCard/>
            <PhotoCard/>
            <PhotoCard/>
            <PhotoCard/>
            <PhotoCard/>
            <PhotoCard/>
            <PhotoCard/>
            <PhotoCard/>
            <PhotoCard/>
            <PhotoCard/>
          </AppGrid>
        </div>
      <AppFooter/>
    </div>
  );
};

export default App;
