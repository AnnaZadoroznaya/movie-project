import { Route, Routes } from 'react-router-dom';

import MainPages, { routeMain as routeMainPage } from 'pages/MainPages'
import MoviesPages, { routeMain as routeMoviesPage } from 'pages/MoviesPages'
import DetailPages, { routeMain as routeDetailPage } from 'pages/DetailPage';
import AboutPages, { routeMain as routeAboutPage } from 'pages/AboutPages';
import SearchPages, { routeMain as routeSearchPage } from 'pages/SearchPages';
import NotFound, { routeMain as routeFoundPage } from 'pages/NotFound';

function Pages() {
  return (
    <Routes>
      <Route path={routeMainPage()} element={<MainPages />} />
      <Route path={routeMoviesPage()} element={<MoviesPages />} />
      <Route path={routeDetailPage()} element={<DetailPages />} />
      <Route path={routeAboutPage()} element={<AboutPages />} />
      <Route path={routeSearchPage()} element={<SearchPages />} />
      <Route path={routeFoundPage()} element={<NotFound />} />
    </Routes>
  )
}

export default Pages;