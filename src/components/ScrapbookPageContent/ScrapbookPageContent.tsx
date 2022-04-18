import './ScrapbookPageContent.css';
import img1 from '../../resources/albumPics/img1.jpg';
import img2 from '../../resources/albumPics/img2.jpg';
import img3 from '../../resources/albumPics/img3.jpg';
import img4 from '../../resources/albumPics/img4.jpeg';
import ScrapbookPageCard from '../ScrapbookPageCard/ScrapbookPageCard';
import {Grid} from '@mui/material';

const images = [img1, img2, img3, img4, img1, img2, img3, img4, img1, img2, img3, img4, img1, img2, img3, img4, img2, img3, img4];
const text = 'The time that we teleported to the Skyrim world here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.';
const date = 'May 27 2001';

const shuffledImages = images
  .map((value) => ({value, sort: Math.random()}))
  .sort((a, b) => a.sort - b.sort)
  .map(({value}) => value);

function ScrapbookPageContent() {
  return (
    <div className="ScrapbookPageContent">
      <div className="ScrapbookPageContent-body">
        <Grid className="ScrapbookPageContent-grid" container spacing={3}>
          {shuffledImages.map((image) =>
            <Grid item xs="auto" zeroMinWidth>
              <ScrapbookPageCard image={image} text={text} date={date}/>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}

export default ScrapbookPageContent;
