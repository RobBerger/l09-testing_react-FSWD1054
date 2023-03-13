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

it('renders another name', () => {
    let contact = { name: "Jane Doe" }
    render(<Contact contact={contact} />)
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
  })

  it('display "not found" when no contact is supplied', () => {
    render(<Contact />)
    expect(screen.getByText('Not Found')).toBeInTheDocument()
  })