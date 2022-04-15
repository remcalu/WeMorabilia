import { Routes, Route } from "react-router-dom";

import ReactDOM from 'react-dom/client';
import { BrowserRouter  } from 'react-router-dom';
import './index.css';

import HomePage from './components/HomePage/HomePage';
import ErrorPage from './components/ErrorPage/ErrorPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  </BrowserRouter>
);