import React, { useEffect } from 'react';
import {
  List
} from 'components/list'
import './App.css';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { fetchDeliveries, selectStatus } from 'store/reducers/deliveries'
import { Container as DeliveryDetails } from 'components/details';
import { Route, Routes } from 'react-router-dom';

const NoMatch = () => <div>no match</div>

const Details = React.lazy(() => import("./components/details").then(module => ({ default: DeliveryDetails })));

function App() {

  const loading = useAppSelector(selectStatus)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!loading) {
      dispatch(fetchDeliveries())
    }
  }, [])

  return (
    <div className="App" data-testid="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/delivery/:delivery_id" element={
          <React.Suspense fallback={<>...</>}>
            <Details />
          </React.Suspense>
        } />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

