import './index.css'
import SearchBtns from "./SearchBtns"
import icon from "./SearchIcon.png"



function App() {
  return (
    <div>
      <section className="navBar">
        <a className="leftNav">About</a>
        <a className="leftNav">Store</a>
        <a className="rightNav">Gmail</a>
        <a className="rightNav">Images</a>
      </section>
      <h1 className="title">Google</h1>
      <input className="searchBar"></input>
      <img className='searchIcon' src={icon}/>
      <SearchBtns />
    </div>

  )
}

export default App;
