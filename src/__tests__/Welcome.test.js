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

afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('the welcome footer', () => {
    it('retrieves the current date', () => {
      const spy = jest.spyOn(Date, 'now')
      render(<Welcome />)
      expect(spy).toHaveBeenCalled()
    })
  
    it('displays the current date', () => {
      const spy = jest.spyOn(Date, 'now')
        .mockImplementation(() => new Date('2021-01-01T00:00')
      )
      render(<Welcome />)
      expect(screen.getByText('This page was rendered on 1/1/2021, 12:00:00 AM')).toBeInTheDocument()
    })
  })