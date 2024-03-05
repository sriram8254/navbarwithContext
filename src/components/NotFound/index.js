import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

// Write your code here

const NotFound = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme} = value
      const notFoundCSS = isDarkTheme ? 'not-found-bg-css' : ''
      const noteFoundHeadCSS = isDarkTheme
        ? 'light-dark-css-head-not-found'
        : ''
      return (
        <>
          <Navbar />
          <div className={`home-container ${notFoundCSS}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1 className={`not-found-heading ${noteFoundHeadCSS}`}>
              Lost Your Way?
            </h1>
            <p className={`not-found-desc ${noteFoundHeadCSS}`}>
              We cannot seem to find the page you are looking for?
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext>
)

export default NotFound
