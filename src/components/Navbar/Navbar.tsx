import './Navbar.css';
import useUserStatus from '../../utils/useUserStatus';
import signOut from '../../utils/signOut';
import logo from '../../resources/WMSquare.jpg';
import {AppBar, Box, Toolbar, Button} from '@mui/material';

function Navbar() {
  const userStatus = useUserStatus();
  const isLoggedIn = (null !== userStatus);
  console.log(isLoggedIn);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="Navbar">
          <div className="Navbar-section-side">
            <img src={logo} className="Navbar-logo" alt="logo" />
          </div>
          <div className="Navbar-section-middle">
            <Button className="Navbar-button" href='/home' variant="contained">
              Home
            </Button>
            <Button className="Navbar-button" href='/scrapbook' variant="contained">
              Scrapbook
            </Button>
            <Button className="Navbar-button" variant="contained">
              Collaborators
            </Button>
            <Button className="Navbar-button" variant="contained">
              About
            </Button>
          </div>
          <div className="Navbar-section-side">
            {isLoggedIn ?
              <Button className="Navbar-button" onClick={signOut} variant="contained">
                Sign Out
              </Button> :
              <Button className="Navbar-button" href='/authenticate' variant="contained">
                Sign in
              </Button>
            }
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
