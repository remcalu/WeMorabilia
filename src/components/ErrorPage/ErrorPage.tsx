import errorImage from '../../resources/404errorimg.jpg';
import './ErrorPage.css';
import {Button, Box} from '@mui/material';

function ErrorPage() {
  return (
    <Box>
      <header className="ErrorPage-header">
        <img src={errorImage} className="ErrorPage-main-image" alt="logo" />
        <h1 className="ErrorPage-main-text"> Error 404 </h1>
        <p className="ErrorPage-main-text"> Click the button below to get back to the main page </p>
        <div className="ErrorPage-main-button-container">
          <Button className="ErrorPage-main-button" href='/' variant="contained">
            Go Home
          </Button>
        </div>
      </header>
    </Box>
  );
}

export default ErrorPage;
