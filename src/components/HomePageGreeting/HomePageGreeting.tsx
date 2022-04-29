import {Box} from '@mui/material';

import greetingImage from '../../resources/photoframe.png';
import './HomePageGreeting.css';

function HomePageGreeting() {
  return (
    <Box>
      <header className="HomePageGreeting-header">
        <img src={greetingImage} className="HomePageGreeting-main-image HomePageGreeting-fade-in" alt="logo" />
        <div>
          <h1 className="HomePageGreeting-main-title-text HomePageGreeting-fade-in"> Welcome to WeMorabilia! </h1>
          <h4 className="HomePageGreeting-main-title-text HomePageGreeting-fade-in"> The perfect place to scrapbook online with those you love </h4>
        </div>
        <p className="HomePageGreeting-fade-in"> View the current collection of photos by clicking scrapbook at the top, you can also view the current collaborators, and get some more info about the website from the about section </p>
      </header>
    </Box>
  );
}

export default HomePageGreeting;
