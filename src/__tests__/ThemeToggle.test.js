import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeToggle from '../ThemeToggle';

beforeEach(() => {
    render(<ThemeToggle />)
  })

  it('defaults to light', () => {
    expect(screen.getByLabelText('Light')).toBeChecked()
  })
  
  it('renders a Light button', () => {
    expect(screen.getByText('Light')).toBeInTheDocument();
  })
  
  it('renders a Dark button', () => {
    expect(screen.getByText('Dark')).toBeInTheDocument();
  })

  describe('when no default is supplied', () => {
    beforeEach(() => {
      render(<ThemeToggle />)
    })
  
    it('renders a Light button', () => {
      expect(screen.getByText('Light')).toBeInTheDocument();
    })
  
    it('renders a Dark button', () => {
      expect(screen.getByText('Dark')).toBeInTheDocument();
    })
  
    it('defaults to light', () => {
      expect(screen.getByLabelText('Light')).toBeChecked()
    })
  
    it('changes to dark when clicked', () => {
      fireEvent.click(screen.getByText('Dark'))
      expect(screen.getByLabelText('Dark')).toBeChecked()
    })
  })
  
  describe('when dark is the default', () => {
    beforeEach(() => {
      render(<ThemeToggle defaultTheme="dark" />)
    })
  
    it('defaults to dark', () => {
      render(<ThemeToggle defaultTheme="dark" />)
      expect(screen.getByLabelText('Dark')).toBeChecked()
    })
  
    it('changes to light when clicked', () => {
        fireEvent.click(screen.getByText('Light'))
        expect(screen.getByLabelText('Light')).toBeChecked()
     })
  })