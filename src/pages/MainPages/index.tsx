import React from "react";
import { useState, useEffect } from "react";
import routeMain from "./routes";
import MoviesList from "components/MoviesList";
import '../../index.css'

const MainPages = () => {

  return (
    <div>
      <section className="movies">
        <div className="container">
          <h1 className="movies-title">MOVIESinfo</h1>
          <p className="movies-info">Самый популярный портал о фильмах</p>
          {<MoviesList pagesLimit={8} categoryId={0} sort={{ sortProperty: '' }} searchValue={''} />}
        </div>
      </section>
    </div>
  )
}
export { routeMain };
export default MainPages;