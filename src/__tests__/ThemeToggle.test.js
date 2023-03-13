import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeToggle from '../ThemeToggle';

it('renders a Light button', () => {
    render(<ThemeToggle />)
    expect(screen.getByText('Light')).toBeInTheDocument();
})