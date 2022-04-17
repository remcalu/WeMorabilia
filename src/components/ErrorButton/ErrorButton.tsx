import styled from '@emotion/styled';
import {ButtonProps, Button} from '@mui/material';

const ErrorButton = styled(Button)<ButtonProps>(({theme}) => ({
  'backgroundColor': '#363940',
  '&:hover': {
    backgroundColor: '#40454b',
  },
}));

export default ErrorButton;

