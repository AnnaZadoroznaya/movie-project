import routeMain from "./routes";
import '../../index.css'
import Notfound from '../../assets/img/notfound.png'

const NotFound = () => {
  return (
    <div>
      <section className="aboutus">
        <div className="container">
          <div className="movies-wrapper">
            <div className="movies-wrapper__aboutus">
              <div className="aboutus-img">
                <img src={Notfound} alt="about" />
              </div>
              <div className="aboutus-info">
                <h3 className="search-title">Try once more<br /> Find an interesting movie</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export { routeMain };
export default NotFound;