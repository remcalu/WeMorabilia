import './ScrapbookPageContent.css';
import img1 from '../../resources/albumPics/img1.jpg'
import img2 from '../../resources/albumPics/img2.jpg'
import img3 from '../../resources/albumPics/img3.jpg'
import img4 from '../../resources/albumPics/img4.jpeg'
import ScrapbookPageCard from '../ScrapbookPageCard/ScrapbookPageCard';
import { Grid } from '@mui/material';

const images = [ img1, img2, img3, img4, img1, img2, img3, img4, img1, img2, img3, img4, img1, img2, img3, img4, img2, img3, img4 ];
let shuffledImages = images
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

function ScrapbookPageContent() {

  return (
    <div className="ScrapbookPageContent">
      <div className="ScrapbookPageContent-body">
        <Grid className="ScrapbookPageContent-grid" container spacing={3}>
          {shuffledImages.map(image => 
            <Grid data-reveal-delay="200" item xs="auto" zeroMinWidth>
              <ScrapbookPageCard image={image}/>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}

export default ScrapbookPageContent;
