import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from '../Welcome';

jest.mock("../UserName", () => function UserName() {
    return (<span>Test User</span>)
})

it('displays the user name in the heading', () => {
  render(<Welcome />)
  expect(screen.getByRole('heading', {name: 'Welcome back, Test User'})).toBeInTheDocument();
})