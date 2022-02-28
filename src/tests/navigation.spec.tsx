import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from 'App';
import { Provider } from 'react-redux';
import { Router } from "react-router";
import { createMemoryHistory } from 'history'
import { deliveriesReducer } from 'store/reducers';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

describe("Routing navigation", () => {

  let store: EnhancedStore 

  beforeEach(() => {
    store = configureStore({
      reducer: { deliveries: deliveriesReducer }
    })
  })

  test("landing on a bad page", () => {
    const history = createMemoryHistory()
    history.push('/some/bad/route')
    render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>,
    )
    expect(screen.getByText(/no match/i)).toBeInTheDocument()
  })

  test("landing on the list page", async () => {
    const history = createMemoryHistory()
    history.push('/')
    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>,
    )
    expect(container.querySelectorAll('.loader').length).toBeGreaterThan(0)

    await waitFor(() => expect(container.querySelectorAll('.block-matrix_element').length).toBeGreaterThan(0))
  })

  test("landing on the list page", async () => {
    const history = createMemoryHistory()

    history.push('/')

    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>,
    )
    expect(container.querySelectorAll('.loader').length).toBeGreaterThan(0)

    await waitFor(() => expect(container.querySelectorAll('.block-matrix_element').length).toBeGreaterThan(0))

    const button = container.querySelector('.block-matrix_element')

    fireEvent.click(button!)

    await waitFor(() => expect(history.location.pathname).toContain('/delivery'));
  })
})
