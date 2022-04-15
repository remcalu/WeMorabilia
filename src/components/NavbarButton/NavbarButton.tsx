import styled from '@emotion/styled';
import { ButtonProps, Button } from '@mui/material';

const NavbarButton = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft : "10px",
  marginTop : "5px",
  marginRight : "10px",
  marginBottom : "5px",
  backgroundColor: '#363940',
  '&:hover': {
    backgroundColor: '#40454b',
  },
  flexGrow : 1,
}));

export default NavbarButton;

