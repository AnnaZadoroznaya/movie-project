import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import routeMain from "./routes";
import getOneMovie from "services/getOneMovie";
import Star from 'assets/img/star.png'
import { IFilmDetail } from "types/IFilmDetail";
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchMovie } from "redux/slices/getOneMovieSlice";
import '../../index.css'

const DetailPage = () => {
  // const dispatch = useDispatch();
  // const { status, error } = useSelector(state => state.film)
  // const film = useSelector((state) => state.getOneMoviesSlice.film)
  const { id } = useParams();
  const [film, setFilm] = useState<IFilmDetail | null>(null);

  useEffect(() => {
    // dispatch(fetchMovie())
    getOneMovie(id).then(response => {
      setFilm(response.data);
    })
  }, [])

  return (
    <section className="movies">
      {film ? (
        <div className="movies-wrapper__moviesdetail">
          <div className="moviesdetail-wrapper">
            <div className="movies-img__wrapper">
              <img src={film.url} className="movies-img" />
            </div>
            <div className="moviesdetail-item__wrapper">
              <div className="moviesdetail-item">
                <h5 className="moviesdetail-item__title main-title">{film.title}</h5>
                <div className="moviesdetail-item__star">
                  <img src={Star} alt={Star} />
                  <span>{film.rating}</span>
                </div>
              </div>
              <div className="moviesdetail-info">
                <div className="moviesdetail-info__block">
                  <h5 className="moviesdetail-item__title">Год выхода:</h5>
                </div>
                <div className="moviesdetail-info__blockk">
                  <span>{film.year}</span>
                </div>
              </div>
              <div className="moviesdetail-info">
                <div className="moviesdetail-info__block">
                  <h5 className="moviesdetail-item__title">Страна:</h5>
                </div>
                <div className="moviesdetail-info__blockk">
                  <span>{film.country}</span>
                </div>
              </div>
              <div className="moviesdetail-info">
                <div className="moviesdetail-info__block">
                  <h5 className="moviesdetail-item__title">Жанр:</h5>
                </div>
                <div className="moviesdetail-info__blockk">
                  <span>{film.genrec}</span>
                </div>
              </div>
              <div className="moviesdetail-info">
                <div className="moviesdetail-info__block">
                  <h5 className="moviesdetail-item__title">Описание:</h5>
                </div>
                <div className="moviesdetail-info__blockk">
                  <span>{film.description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : <>NON</>}
    </section>

  )
}
export { routeMain };
export default DetailPage;