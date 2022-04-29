import {render, screen} from '@testing-library/react';
import ScrapbookPageCard from './ScrapbookPageCard';
import Amplify from 'aws-amplify';
import config from '../../aws-exports';

import testImage from '../../resources/test/img1.jpg';

Amplify.configure(config);

const testDescription = 'This is a test description';
const testDate = '1650-10-08';

test('renders ScrapbookPageCard image', () => {
  render(<ScrapbookPageCard image={testImage} text={testDescription} date={testDate}/>);
  const selectedElement = screen.getByAltText('an image');
  expect(selectedElement).toBeInTheDocument();
});

test('renders ScrapbookPageCard description', () => {
  render(<ScrapbookPageCard image={testImage} text={testDescription} date={testDate}/>);
  const selectedElement = screen.getByText('This is a test description');
  expect(selectedElement).toBeInTheDocument();
});

test('renders ScrapbookPageCard date', () => {
  render(<ScrapbookPageCard image={testImage} text={testDescription} date={testDate}/>);
  const selectedElement = screen.getByText('1650-10-08');
  expect(selectedElement).toBeInTheDocument();
});

