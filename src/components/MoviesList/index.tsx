import { useState, useEffect } from "react";
import Sceleton from "components/Sceleton";
import MoviesItem from "./components/MoviesItem";
import getMovies from "services/getMovies";
import { IMoviesItem } from "types/IMoviesItem";
import notFind from '../../assets/img/notFoundColor.png';
import '../../index.css'
import { ISort } from "types/ISort";

interface IMoviesListParams {
  pagesLimit: number;
  categoryId: number;
  sort: ISort;
  searchValue: string;

}

const MoviesList = ({ pagesLimit, categoryId, sort, searchValue }: IMoviesListParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    getMovies(categoryId, sort, searchValue).then(response => {
      setIsLoading(false)
      setMoviesList(response.data.slice(0, pagesLimit))
    })
  }, [categoryId, sort, searchValue])

  return (
    <div className="movies-wrapper" >
      {
        isLoading ? [...new Array(10)].map((_, index) => <Sceleton key={index} />)
          : moviesList.length == 0 ? <img src={notFind} className="not-faond" /> : moviesList.map((movie: IMoviesItem) =>
            <MoviesItem key={movie.id} item={movie} />
          )
      }
    </div >

  )
}

export default MoviesList;