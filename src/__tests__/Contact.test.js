import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Contact from '../Contact';

it('renders without error', () => {
  render(<Contact />)
})

it('renders the name', () => {
    let contact = { name: "John Doe"}
    render(<Contact contact={contact} />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
})