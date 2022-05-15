import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/Main';

Photo.propTypes = {};

function Photo(props) {
  const match = useMatch();
  console.log({ match });

  return (
    <Routes>
      {/* <Route exact path={match.url} element={<MainPage />} /> */}

      <Route path={`${match.url}/add`} element={<AddEditPage />} />
      <Route path={`${match.url}/:photoId`} element={<AddEditPage />} />

      <Route element={<NotFound />} />
    </Routes>
  );
}

export default Photo;