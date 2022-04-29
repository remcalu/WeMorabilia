import {render, screen} from '@testing-library/react';
import Navbar from './Navbar';
import Amplify from 'aws-amplify';
import config from '../../aws-exports';

Amplify.configure(config);

test('renders Navbar main titlebar button HomeIcon', () => {
  render(<Navbar/>);
  const selectedElement = screen.getByTestId('HomeIcon');
  expect(selectedElement).toBeInTheDocument();
});

test('renders Navbar main titlebar button PanoramaIcon', () => {
  render(<Navbar/>);
  const selectedElement = screen.getByTestId('PanoramaIcon');
  expect(selectedElement).toBeInTheDocument();
});

test('renders Navbar main titlebar button PeopleIcon', () => {
  render(<Navbar/>);
  const selectedElement = screen.getByTestId('PeopleIcon');
  expect(selectedElement).toBeInTheDocument();
});

test('renders Navbar main titlebar button HomeIcon', () => {
  render(<Navbar/>);
  const selectedElement = screen.getByTestId('InfoIcon');
  expect(selectedElement).toBeInTheDocument();
});

test('renders Navbar main titlebar button HomeIcon', () => {
  render(<Navbar/>);
  const selectedElement = screen.getByTestId('LoginIcon');
  expect(selectedElement).toBeInTheDocument();
});
