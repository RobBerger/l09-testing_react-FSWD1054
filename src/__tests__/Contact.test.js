import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Contact from '../Contact';

it('renders without error', () => {
  render(<Contact />)
})