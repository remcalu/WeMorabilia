import {Routes, Route} from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';

import HomePage from './components/HomePage/HomePage';
import ScrapbookPage from './components/ScrapbookPage/ScrapbookPage';
import ErrorPage from './components/ErrorPage/ErrorPage';

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
      <Route path="/" element={<HomePage/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  </BrowserRouter>
);
