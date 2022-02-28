import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CustomerView } from 'components/details/views/customer';
import { store } from 'store';
import ReactDOM from 'react-dom';

it("Checks the CustomerView", () => {
  render(
    <MemoryRouter>
      <CustomerView customer={{name: 'alberto', address: '', city: '', zipCode: '', latitude: null, longitude: null}} />
    </MemoryRouter>,
  );
  const contentText = screen.getByText('alberto');
  expect(contentText).toBeInTheDocument();
});