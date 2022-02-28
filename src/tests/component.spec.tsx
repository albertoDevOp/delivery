import React from 'react';
import { fireEvent, render, RenderResult, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { CustomerView } from 'components/details/views/customer';
import { Customer } from 'models/delivery';
import { Provider } from 'react-redux';
import { Container } from 'components/details';
import { store } from 'store';

describe("Component state and behaviour", () => {

  const customer: Customer = {
    name: 'alberto',
    address: 'Barcelona 10',
    city: 'Hospitalet',
    zipCode: '08906',
    latitude: 1,
    longitude: 1
  }

  it("Checks the CustomerView", () => {
    render(
      <MemoryRouter>
        <CustomerView customer={customer} />
      </MemoryRouter>,
    );
    const contentText = screen.getByText('alberto');
    expect(contentText).toBeInTheDocument();
  });

  it("Checks the CustomerView", () => {
    render(
      <MemoryRouter>
        <CustomerView customer={customer} />
      </MemoryRouter>,
    );
    const contentText = screen.getByText('alberto');
    expect(contentText).toBeInTheDocument();
  });

  const renderContainer = (): RenderResult =>
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/delivery/1"]}>
          <Container />
        </MemoryRouter>
      </Provider>
    );

  it("it should be mark as the current deliver", async () => {
    
    const { container } = renderContainer()

    waitFor(() => expect(container.querySelector(".button-activate")).toHaveTextContent('Actiate'))

  })

})