import './AmplifyAuthenticator.css';
import {Authenticator} from '@aws-amplify/ui-react';
import PropTypes from 'prop-types';
import {Typography} from '@mui/material';
import '@aws-amplify/ui-react/styles.css';


const components = {
  Header() {
    return (
      <Typography>
        WeMorabilia Login Page
      </Typography>
    );
  },
};

AmplifyAuthenticator.propTypes = {
  passedComponent: PropTypes.element,
};

function AmplifyAuthenticator(props) {
  return (
    <Authenticator className='ScrapbookPage-auth' components={components}>
      {({signOut, user}) => (props.passedComponent)}
    </Authenticator>
  );
}

export default AmplifyAuthenticator;
