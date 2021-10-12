import './index.css'
import SearchBtns from "./SearchBtns"


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
      <SearchBtns />
    </div>

  )
}

export default App;
