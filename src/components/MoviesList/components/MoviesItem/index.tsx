import { NavLink } from "react-router-dom";
import { routeMain as routeDetailPage } from 'pages/DetailPage';
import { IMoviesItem } from "types/IMoviesItem";
import '../../../../index.css'

interface IMoviesItemParams {
  item: IMoviesItem
}

const MoviesItem = ({ item }: IMoviesItemParams) => {

  return (
    <NavLink to={routeDetailPage(item.id)} className="movies-item">
      <img src={item.url} className="movies-img" />
      <div className="movies-item__info">
        <h5 className="movies-item__title">{item.title}</h5>
        <span>{item.country}</span>
        <span>{item.genrec}</span>
      </div>
    </NavLink>
  )
}

export default MoviesItem;