import './index.css'
import SearchBtns from "./SearchBtns"
// import icon from "./SearchIcon.png"
import dotsIcon from "./DotsIcon.png"



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
        <input
          className="searchBar"
          // placeholder="Search Google or type a URL"
        ></input>
        <SearchBtns />
      </section>
    </div>
  )
}

export default App;
