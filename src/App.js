import './index.css'
import SearchBtns from "./SearchBtns"



function App() {
  return (
    <div>
      <section className="navBar">
        <button className="leftNav">About</button>
        <button className="leftNav">Store</button>
        <button className="rightNav">Gmail</button>
        <button className="rightNav">Images</button>
        <div class="bento-menu">
          <div class="bento-dot"></div>
          <div class="bento-dot"></div>
          <div class="bento-dot"></div>
          <div class="bento-dot"></div>
          <div class="bento-dot"></div>
          <div class="bento-dot"></div>
          <div class="bento-dot"></div>
          <div class="bento-dot"></div>
          <div class="bento-dot"></div>
        </div>
      </section>
      <h1 className="title">Google</h1>
      <section>
        <input className="searchBar"></input>
        <SearchBtns />
      </section>
      <footer class="footer">
        <button class="leftFooter">Advertising</button>
        <button class="leftFooter">Business</button>
        <button class="leftFooter">How Search Works</button>
        <button class="rightFooter">Privacy</button>
        <button class="rightFooter">Terms</button>
        <button class="rightFooter">Settings</button>
      </footer>
    </div>
  )
}

export default App;
