import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const logoCSS = isDarkTheme ? 'dark' : 'light'
      const btnCSS = isDarkTheme ? 'light' : 'dark'
      const navCSS = isDarkTheme ? 'nav-light-dark' : ''
      const linkCSS = isDarkTheme ? 'link-light-dark' : ''
      const onToggleClick = () => {
        toggleTheme()
      }
      return (
        <nav className={`nav-container ${navCSS}`}>
          <img
            src={`https://assets.ccbp.in/frontend/react-js/website-logo-${logoCSS}-theme-img.png`}
            alt="website logo"
            className="icon"
          />
          <ul className="links-container">
            <Link to="/" className="nav-link-item">
              <li className="link-container">
                <p className={`link-heading ${linkCSS}`}>Home</p>
              </li>
            </Link>
            <Link to="/about" className="nav-link-item">
              <li className="link-container">
                <p className={`link-heading ${linkCSS}`}>About</p>
              </li>
            </Link>
          </ul>
          <button
            type="button"
            className="theme-btn"
            onClick={onToggleClick}
            data-testid="theme"
          >
            <img
              src={`https://assets.ccbp.in/frontend/react-js/${btnCSS}-theme-img.png`}
              alt="theme"
              className="icon"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
