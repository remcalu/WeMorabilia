import './ScrapbookPageCard.css';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function ScrapbookPageCard(props) {
  return (
    <Card className="ScrapbookPageCard" style={{backgroundColor: "#40454b"}} variant="elevation" sx={{ width: 250, height: 300 }}>
      <Card variant="elevation">
        <CardMedia
          component="img"
          height="233px"
          image={props.image}
          alt="green iguana"
        />
      </Card>
      <CardContent >
        <Typography noWrap variant="body2" color="white">
          The time that we teleported to the Skyrim world
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ScrapbookPageCard;
