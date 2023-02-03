import routeMain from "./routes";
import '../../index.css'
import Anna from '../../assets/img/Anna.png'

const AboutPages = () => {
  return (
    <div>
      <section className="aboutus">
        <div className="container">
          <div className="movies-wrapper">
            <div className="movies-wrapper__aboutus">
              <div className="aboutus-img">
                <img src={Anna} alt="about" />
              </div>
              <div className="aboutus-info">
                <h3 className="search-title">MOVIESinfo</h3>
                <p className="aboutus-text">
                  The studio, founded in 1918 as Cohn-Brandt-Cohn Film Sales by brothers Jack and Harry Cohn and Joe Brandt, released its first feature film in August 1922. It adopted the Columbia Pictures name in 1924 and went public two years later. The name is derived from "Columbia", a national personification of the United States, which is used as the company's logo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export { routeMain };
export default AboutPages;