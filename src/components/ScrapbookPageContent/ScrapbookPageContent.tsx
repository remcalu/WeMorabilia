import {API, Storage} from 'aws-amplify';
import {useState, useEffect} from 'react';
import {Grid} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

import './ScrapbookPageContent.css';
import ScrapbookPageCard from '../ScrapbookPageCard/ScrapbookPageCard';
import ScrapbookPageAdd from '../ScrapbookPageAdd/ScrapbookPageAdd';
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
    // @ts-ignore
    const imageEntriesFromAPI = apiData.data.listImageEntries.items;
    await Promise.all(imageEntriesFromAPI.map(async (imageEntry) => {
      if (imageEntry.image) {
        const image = await Storage.get(imageEntry.image);
        imageEntry.image = image;
      }
      return imageEntry;
    }));

    // @ts-ignore
    const imageEntriesSorted = apiData.data.listImageEntries.items;
    imageEntriesSorted.sort((a, b)=>{
      return new Date(b.date).valueOf() - new Date(a.date).valueOf();
    });
    setImageEntries(imageEntriesSorted);
  }

  async function createImageEntry() {
    // @ts-ignore
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

  async function onChangeForm(e) {
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
            <ScrapbookPageAdd
              formData={formData}
              clickUpload={clickUpload}
              onChangeForm={onChangeForm}
              setFormData={setFormData}
              createImageEntry={createImageEntry}
            />
          </Grid>
          {imageEntries.map((imageEntry) =>
            <Grid item xs="auto" zeroMinWidth>
              <ScrapbookPageCard
                image={imageEntry.image}
                text={imageEntry.description}
                date={imageEntry.date}
              />
              <CancelIcon className="ScrapbookPageContent-delete-item" onClick={() => deleteImageEntry(imageEntry)}/>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}

export default ScrapbookPageContent;
