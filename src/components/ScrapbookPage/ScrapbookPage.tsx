import './ScrapbookPage.css';
import ScrapbookPageContent from '../ScrapbookPageContent/ScrapbookPageContent';
import Navbar from '../Navbar/Navbar';
import AmplifyAuthenticator from '../AmplifyAuthenticator/AmplifyAuthenticator';
import '@aws-amplify/ui-react/styles.css';

function ScrapbookPage() {
  return (
    <div>
      <AmplifyAuthenticator passedComponent={
        <div className="ScrapbookPage">
          <Navbar/>
          <ScrapbookPageContent/>
        </div>
      }/>
    </div>
  );
}

export default ScrapbookPage;
