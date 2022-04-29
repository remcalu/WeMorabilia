import {render, screen} from '@testing-library/react';
import HomePageGreeting from './HomePageGreeting';
import Amplify from 'aws-amplify';
import config from '../../aws-exports';

Amplify.configure(config);

test('renders HomePageGreeting title text', () => {
  render(<HomePageGreeting/>);
  const selectedElement = screen.getByText('Welcome to WeMorabilia!');
  expect(selectedElement).toBeInTheDocument();
});

test('renders HomePageGreeting subtitle text', () => {
  render(<HomePageGreeting/>);
  const selectedElement = screen.getByText('The perfect place to scrapbook online with those you love');
  expect(selectedElement).toBeInTheDocument();
});

test('renders HomePageGreeting main text', () => {
  render(<HomePageGreeting/>);
  const selectedElement = screen.getByText('View the current collection of photos by clicking scrapbook at the top, you can also view the current collaborators, and get some more info about the website from the about section');
  expect(selectedElement).toBeInTheDocument();
});
