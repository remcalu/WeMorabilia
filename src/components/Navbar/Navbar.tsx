import './Navbar.css';
import logo from '../../resources/WMSquare.jpg';

import {AppBar, Box, Toolbar, Button} from '@mui/material';

function Navbar() {
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
            <Button className="Navbar-button" variant="contained">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
