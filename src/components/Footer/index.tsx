import '../../index.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <a href="#" className="logo"></a>
          <span>Дипломный проект</span>
          <div className="footer-item">
            <span>Made by</span>
            <span className="footer-item__name">Задорожная Анна</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
