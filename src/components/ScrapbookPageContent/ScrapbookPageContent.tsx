import './ScrapbookPageContent.css';
import ScrapbookPageCard from '../ScrapbookPageCard/ScrapbookPageCard';
import {API, Storage} from 'aws-amplify';
import {useState, useEffect} from 'react';
import {Grid, Card, Button} from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CancelIcon from '@mui/icons-material/Cancel';
import {listImageEntries} from '../../graphql/queries';
import {createImageEntry as createImageEntryMutation, deleteImageEntry as deleteImageEntryMutation} from '../../graphql/mutations';

const initialFormState = {image: '', description: '', date: ''};

function ScrapbookPageContent() {
  const [imageEntries, setImageEntries] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchImageEntries();
  }, []);

  async function fetchImageEntries() {
    const apiData = await API.graphql({query: listImageEntries});
    // @ts-ignore: Unreachable code error
    const imageEntriesFromAPI = apiData.data.listImageEntries.items;
    await Promise.all(imageEntriesFromAPI.map(async (imageEntry) => {
      if (imageEntry.image) {
        const image = await Storage.get(imageEntry.image);
        imageEntry.image = image;
      }
      return imageEntry;
    }));
    // @ts-ignore: Unreachable code error
    setImageEntries(apiData.data.listImageEntries.items);
  }

  async function createImageEntry() {
    // @ts-ignore: Unreachable code error
    if (!formData.description || !formData.image || !formData.date) return;
    await API.graphql({query: createImageEntryMutation, variables: {input: formData}});
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setImageEntries([...imageEntries, formData]);
    setFormData(initialFormState);
  }

  async function deleteImageEntry({id}) {
    const newImageEntriesArray = imageEntries.filter((imageEntry) => imageEntry.id !== id);
    setImageEntries(newImageEntriesArray);
    await API.graphql({query: deleteImageEntryMutation, variables: {input: {id}}});
  }

  async function onChange(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setFormData({...formData, image: file.name});
    await Storage.put(file.name, file);
    fetchImageEntries();
  }

  function clickUpload() {
    document.getElementById('fileUpload').click();
  }

  return (
    <div className="ScrapbookPageContent">
      <div className="ScrapbookPageContent-body">
        <Grid className="ScrapbookPageContent-grid" container spacing={3}>
          <Grid item xs="auto">
            <Card className="ScrapbookPageCardAddImg ScrapbookPageCardAddImg-fade-in" variant="elevation">
              <div className='ScrapbookPageCardAddImg-item'>
                <FileUploadIcon onClick={clickUpload} sx={{fontSize: 100, color: 'white'}}/>
                <input id="fileUpload" type="file" hidden onChange={onChange}/>
              </div>
              <div>
                <input
                  className='ScrapbookPageCardAddImg-item ScrapbookPageCardAddImg-item-input'
                  onChange={(e) => setFormData({...formData, 'description': e.target.value})}
                  placeholder="Description"
                  value={formData.description}
                />
                <input
                  type="date"
                  className='ScrapbookPageCardAddImg-item ScrapbookPageCardAddImg-item-input'
                  onChange={(e) => setFormData({...formData, 'date': e.target.value})}
                  placeholder="Date"
                  value={formData.date}
                />
              </div>
              <Button variant="contained" className="ScrapbookPageCardAddImg-button ScrapbookPageCardAddImg-item" onClick={createImageEntry}>Add Image</Button>
            </Card>
          </Grid>
          {imageEntries.map((imageEntry) =>
            <Grid item xs="auto" zeroMinWidth>
              <ScrapbookPageCard image={imageEntry.image} text={imageEntry.description} date={imageEntry.date}/>
              <CancelIcon className="ScrapbookPageContent-delete-item" onClick={() => deleteImageEntry(imageEntry)} sx={{fontSize: 40, color: '#40454b'}}/>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}

export default ScrapbookPageContent;
