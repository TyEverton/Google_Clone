import './index.css'
import SearchBtns from './SearchBtns'
import Title from './GoogleTitle.png'
import SearchIcon from './SearchIcon.png'
import VoiceSearch from './VoiceSearchIcon.png'
import CarbonImage from './CarbonImage.png'

function App() {
  return (
    <div>
      <section className="navBar">
        <button className="leftNav">About</button>
        <button className="leftNav">Store</button>
        <button className="rightNav">Gmail</button>
        <button className="rightNav">Images</button>
        <button className="signInBtn">Sign in</button>
        <div className="bento-menu">
          <div className="bento-dot"></div>
          <div className="bento-dot"></div>
          <div className="bento-dot"></div>
          <div className="bento-dot"></div>
          <div className="bento-dot"></div>
          <div className="bento-dot"></div>
          <div className="bento-dot"></div>
          <div className="bento-dot"></div>
          <div className="bento-dot"></div>
        </div>
      </section>
      <img src={Title} alt="Google Title" className="title" />
      <img src={SearchIcon} alt="Search Icon" className="searchIcon" />
      <img src={VoiceSearch} alt="Voice Search" className="voiceSearch" />
      <section>
        <input className="searchBar"></input>
        <SearchBtns />
      </section>
      <footer className="footer">
        <button className="leftFooter">Advertising</button>
        <button className="leftFooter">Business</button>
        <button className="leftFooter">How Search Works</button>
        <button className="rightFooter">Privacy</button>
        <button className="rightFooter">Terms</button>
        <button className="rightFooter">Settings</button>
        <p className="carbonStatement">
          <img
            src={CarbonImage}
            alt="Carbon Neutral Icon"
            className="carbonImage"
          />
          Carbon neutral since 2007
        </p>
      </footer>
    </div>
  )
}

export default App
