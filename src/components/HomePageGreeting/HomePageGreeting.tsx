import greetingImgage from '../../resources/photoframe.png';
import './HomePageGreeting.css';

import { Box } from '@mui/material';

function HomePageGreeting() {
  return (
    <Box>
      <header className="HomePageGreeting-header">
        <img src={greetingImgage} className="HomePageGreeting-main-image" alt="logo" />
        <div>
          <h1 className="HomePageGreeting-main-title-text fade-in-text"> Welcome to WeMorabilia! </h1>
          <h4 className="HomePageGreeting-main-title-text fade-in-text"> The perfect place to scrapbook online with those you love</h4>
        </div>
        <p> View the current collection of photos by clicking scrapbook at the top, you can also view the current collaborators, and get some more info about the website from the about section </p>
      </header>
    </Box>
  );
}

export default HomePageGreeting;
