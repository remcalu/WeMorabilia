import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import AmplifyAuthenticator from './components/AmplifyAuthenticator/AmplifyAuthenticator';
import HomePage from './components/HomePage/HomePage';
import ScrapbookPage from './components/ScrapbookPage/ScrapbookPage';
import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomePage/>} />
      <Route path="/scrapbook" element={<ScrapbookPage/>} />
      <Route path="/authenticate" element={<AmplifyAuthenticator passedComponent={<Navigate to="/"/>}/>} />
      <Route path="/" element={<Navigate to="/home"/>} />
      <Route path="*" element={<Navigate to="/home"/>}/>
    </Routes>
  </BrowserRouter>
);
