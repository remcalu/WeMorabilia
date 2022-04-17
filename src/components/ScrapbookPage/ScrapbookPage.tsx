import './ScrapbookPage.css';
import ScrapbookPageContent from '../ScrapbookPageContent/ScrapbookPageContent';
import Navbar from '../Navbar/Navbar'

function ScrapbookPage() {
  return (
    <div className="ScrapbookPage">
      <Navbar/>
      <ScrapbookPageContent/>
    </div>
  );
}

export default ScrapbookPage;
