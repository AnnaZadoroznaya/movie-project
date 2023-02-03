import { useState, useEffect } from "react";
import routeMain from "./routes";
import MoviesList from "components/MoviesList";
import Search from "components/Search";
import '../../index.css'

const SearchPages: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div>
      <section className="search">
        <div className="container">
          <div className="movies-wrapper movies-wrapper__search">
            <h3 className="search-title">Поиск: </h3>
            <div className="search-cross">
              <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className="search-block__wrapper">
              <div className="search-block">
                <div className="search-item">
                  <div className="search-img">
                    {<MoviesList pagesLimit={15}
                      categoryId={0} sort={{ sortProperty: '' }} searchValue={searchValue} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}
export { routeMain };
export default SearchPages;