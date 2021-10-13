import './index.css'
import SearchBtns from "./SearchBtns"
// import icon from "./SearchIcon.png"



function App() {
  return (
    <div>
      <section className="navBar">
        <button className="leftNav">About</button>
        <button className="leftNav">Store</button>
        <button className="rightNav">Gmail</button>
        <button className="rightNav">Images</button>
      </section>
      <h1 className="title">Google</h1>
      <section>
        <input
          className="searchBar"
          // placeholder="Search Google or type a URL"
        ></input>
        {/* <img className='searchIcon' src={icon}/> */}
        <SearchBtns />
      </section>
    </div>
  )
}

export default App;
