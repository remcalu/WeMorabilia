import {AppBar, Box, Toolbar, Button} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PanoramaIcon from '@mui/icons-material/Panorama';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

import './Navbar.css';
import useUserStatus from '../../utils/useUserStatus';
import signOut from '../../utils/signOut';
import redirectLink from '../../utils/redirectLink';
import logo from '../../resources/WMSquare.jpg';

function Navbar() {
  const userStatus = useUserStatus();
  const isLoggedIn = (null !== userStatus);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="Navbar">
          <div className="Navbar-section-side">
            <img src={logo} className="Navbar-logo" alt="logo" />
          </div>
          <div className="Navbar-section-middle">
            <Button className="Navbar-button" href='/home' variant="contained"> Home </Button>
            <Button className="Navbar-button" href='/scrapbook' variant="contained"> Scrapbook </Button>
          </div>
          <div className="Navbar-section-side">
            {isLoggedIn ?
              <Button className="Navbar-button" onClick={signOut} variant="contained"> Sign Out </Button> :
              <Button className="Navbar-button" href='/authenticate' variant="contained"> Sign in </Button>
            }
          </div>
        </Toolbar>
        <Toolbar className="Navbar-dropdown">
          <div className="Navbar-section-middle">
            <HomeIcon className="Navbar-dropdown-button" onClick={() => redirectLink('/home')}/>
            <PanoramaIcon className="Navbar-dropdown-button" onClick={() => redirectLink('/scrapbook')}/>
            {isLoggedIn ?
              <LogoutIcon className="Navbar-dropdown-button" onClick={signOut}/> :
              <LoginIcon className="Navbar-dropdown-button" onClick={() => redirectLink('/authenticate')}/>
            }
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
