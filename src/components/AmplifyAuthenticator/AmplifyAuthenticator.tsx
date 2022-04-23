import './AmplifyAuthenticator.css';
import AmplifyAuthenticatorComps from '../AmplifyAuthenticatorComps/AmplifyAuthenticatorComps';
import {Authenticator} from '@aws-amplify/ui-react';
import PropTypes from 'prop-types';
import '@aws-amplify/ui-react/styles.css';

AmplifyAuthenticator.propTypes = {
  passedComponent: PropTypes.element,
};

function AmplifyAuthenticator(props) {
  return (
    <Authenticator className='ScrapbookPage-auth' components={AmplifyAuthenticatorComps}>
      {() => (props.passedComponent)}
    </Authenticator>
  );
}

export default AmplifyAuthenticator;
