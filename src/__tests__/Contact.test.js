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

  it('renders a "delete" button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: "Delete" })).toBeInTheDocument()
  })

  it('displays the alert when the delete button is clicked', () => {
    window.alert = jest.fn()
    render(<Contact />)
    const button = screen.getByRole('button', { name: "Delete" })
    fireEvent.click(button)
    expect(window.alert).toHaveBeenCalledTimes(1)
  })