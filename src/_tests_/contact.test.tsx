import { render, screen } from '@testing-library/react';
import { Contact } from '../components/contact';
import '@testing-library/jest-dom';

describe('Contact page', () => {
  it('should render the basic structure of the page', () => {
    render(<Contact />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });
});