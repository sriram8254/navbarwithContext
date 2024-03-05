import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

// Write your code here

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeCSS = isDarkTheme ? 'home-bg-css' : ''
      const homeHeadCSS = isDarkTheme ? 'light-dark-css-head-home' : ''

      return (
        <>
          <Navbar />
          <div className={`home-container ${homeCSS}`}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home-img"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-img"
              />
            )}

            <h1 className={`home-heading ${homeHeadCSS}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
