import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react';

it('renders the documentation link', () => {
    render(<App />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
})