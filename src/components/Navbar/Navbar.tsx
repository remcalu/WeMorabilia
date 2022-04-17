import './Navbar.css';
import logo from '../../resources/WMSquare.jpg';

import {AppBar, Box, Toolbar} from '@mui/material';
import NavbarButton from '../NavbarButton/NavbarButton';

function Navbar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="Navbar">
          <div className="Navbar-section-side">
            <img src={logo} className="Navbar-logo" alt="logo" />
          </div>
          <div className="Navbar-section-middle">
            <NavbarButton href='/home' variant="contained" className="Navbar-item">
              Home
            </NavbarButton>
            <NavbarButton href='/scrapbook' variant="contained" className="Navbar-item">
              Scrapbook
            </NavbarButton>
            <NavbarButton variant="contained" className="Navbar-item">
              Collaborators
            </NavbarButton>
            <NavbarButton variant="contained" className="Navbar-item">
              About
            </NavbarButton>
          </div>
          <div className="Navbar-section-side">
            <NavbarButton variant="contained">Login</NavbarButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
