import React from 'react';
import './ScrapbookPageCard.css';
import PropTypes from 'prop-types';
import {Card, CardMedia, CardActionArea, CardContent, Typography, Box, Modal} from '@mui/material';

ScrapbookPageCard.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string
};

function ScrapbookPageCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card className="ScrapbookPageCard ScrapbookPageCard-fade-in" variant="elevation">
      <CardActionArea onClick={handleOpen}>
        <Card variant="elevation">
          <CardMedia component="img" height="233px" width="233px" image={props.image} alt="green iguana"/>
        </Card>
        <CardContent >
          <Typography noWrap variant="body2" color="white">
            {props.text}
          </Typography>
          <Typography noWrap variant="body2" color="#9e9e9e">
            {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box className="ScrapbookPageCard-modal">
          <div className="ScrapbookPageCard-modal-container-top">
            <img className='ScrapbookPageCard-modal-container-top-image' src={props.image} alt="image"/>
          </div>
          <div className="ScrapbookPageCard-modal-container-bottom">
            <CardContent >
              <Typography className='ScrapbookPageCard-modal-container-bottom-text' variant="body2" color="white">
                {props.text}
              </Typography>
              <Typography className='ScrapbookPageCard-modal-container-bottom-text' variant="body2" color="#9e9e9e">
                {props.date}
              </Typography>
            </CardContent>
          </div>
        </Box>
      </Modal>
    </Card>
  );
}

export default ScrapbookPageCard;
