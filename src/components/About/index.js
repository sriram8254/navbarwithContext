import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

// Write your code here

const About = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme} = value
      const homeCSS = isDarkTheme ? 'home-bg-css' : ''
      const homeLightDark = isDarkTheme ? 'dark' : 'light'
      const homeHeadCSS = isDarkTheme ? 'light-dark-css-head-home' : ''
      return (
        <>
          <Navbar />
          <div className={`home-container ${homeCSS}`}>
            <img
              src={`https://assets.ccbp.in/frontend/react-js/about-${homeLightDark}-img.png`}
              alt="about"
              className="home-img"
            />
            <h1 className={`home-heading ${homeHeadCSS}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext>
)

export default About
