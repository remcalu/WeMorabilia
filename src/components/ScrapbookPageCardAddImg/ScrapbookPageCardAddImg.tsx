import './ScrapbookPageCardAddImg.css';
import {Card, CardContent, Typography} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function ScrapbookPageCardAddImg(props) {
  return (
    <Card className="ScrapbookPageCardAddImg ScrapbookPageCardAddImg-fade-in" variant="elevation">
      <CardContent>
        <AddCircleOutlineIcon sx={{fontSize: 140, color: 'white'}}/>
        <Typography noWrap variant="body2" color="white">
            Add new image
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ScrapbookPageCardAddImg;
