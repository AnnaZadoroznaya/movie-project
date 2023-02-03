import { useState } from "react";
import routeMain from "./routes";
import MoviesList from "components/MoviesList";
import Categories from "components/Categories";
import Sort from "components/Sort";
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId } from "redux/slices/filterSlice";
import '../../index.css'
import { ISort } from "types/ISort";


const MoviesPages = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state: any) => state.filterSlice.categoryId);// TODO поменять any на интерфейс
  const sortType = useSelector((state: any) => state.filterSlice.sort.sortProperty);// TODO поменять any на интерфейс

  const inputSort: ISort = {
    sortProperty: sortType
  }
  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  }
  return (
    <div>
      <section className="movies">
        <div className="container">
          <div className="movies-wrapper">
            <div className="sort-wrapper">
              <Sort />
            </div>
            <div className="movies-select">
              <p className="movies-list">Выбери категорию:</p>
              <div className="select-wrapper">
                <Categories value={categoryId} onClickCategory={onChangeCategory} />
              </div>
            </div>
            <MoviesList pagesLimit={20} categoryId={categoryId} sort={inputSort} searchValue={''} />
          </div>
        </div>
      </section>
    </div>
  )
}
export { routeMain };
export default MoviesPages;