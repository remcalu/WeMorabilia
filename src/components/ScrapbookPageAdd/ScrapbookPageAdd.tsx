import PropTypes from 'prop-types';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import {Card, Button} from '@mui/material';

import './ScrapbookPageAdd.css';

ScrapbookPageCard.propTypes = {
  formData: PropTypes.object,
  clickUpload: PropTypes.func,
  onChangeForm: PropTypes.func,
  setFormData: PropTypes.func,
  createImageEntry: PropTypes.func
};

function ScrapbookPageCard(props) {
  return (
    <Card className="ScrapbookPageAdd ScrapbookPageAdd-fade-in" variant="elevation">
      <div className='ScrapbookPageAdd-item'>
        <FileUploadIcon className="ScrapbookPageAdd-upload" onClick={props.clickUpload}/>
        <input id="fileUpload" type="file" hidden onChange={props.onChangeForm}/>
      </div>
      <div>
        <input
          className='ScrapbookPageAdd-item ScrapbookPageAdd-item-input'
          onChange={(e) => props.setFormData({...(props.formData), 'description': e.target.value})}
          placeholder="Description"
          value={(props.formData).description}
        />
        <input
          type="date"
          className='ScrapbookPageAdd-item ScrapbookPageAdd-item-input'
          onChange={(e) => props.setFormData({...(props.formData), 'date': e.target.value})}
          placeholder="Date"
          value={(props.formData).date}
        />
      </div>
      <Button variant="contained" className="ScrapbookPageAdd-button ScrapbookPageAdd-item" onClick={props.createImageEntry}>Post Image</Button>
    </Card>
  );
}

export default ScrapbookPageCard;
