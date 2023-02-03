import { NavLink, Link } from "react-router-dom";
import { routeMain as routeMainPage } from "pages/MainPages";
import { routeMain as routeMoviesPage } from 'pages/MoviesPages';
import { routeMain as routeAboutPage } from 'pages/AboutPages';
import { routeMain as routeSearchPage } from 'pages/SearchPages';
import '../../index.css'



const Header = () => {
  const setActive = ({ isActive }: { isActive: boolean }) => isActive ? "link-active" : '';

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <Link to="/main" className="logo"></Link>
          <nav className="menu">
            <ul className="menu-list">
              <li className="menu-item">
                <NavLink to={routeMainPage()} className={setActive}>
                  Главная
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to={routeMoviesPage()} className={setActive}>
                  Фильмы по категориям
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to={routeAboutPage()} className={setActive}>
                  О нас
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to={routeSearchPage()} className={setActive}>
                  Поиск
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div >
    </header >
  )
}

export default Header;