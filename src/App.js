import React, {useRef, useState} from "react";

function App() {
  const search_bar = useRef()
  const [searched, setSearched] = useState(undefined)



  const search_bar_enter=(event)=> {
    if (event.key === "Enter") {
      search(false)
      document.activeElement.blur()
    }
}
  function search(isFromButtonPress) {
    if (isFromButtonPress) return setSearched(search_bar.current.value)
    if (document.activeElement === search_bar.current || !search_bar.current.value.length === 0) {
      setSearched(search_bar.current.value)
      
    }
  }


  return (
    <>
    <input className="search" ref={search_bar} type="text" placeholder="Search for a subreddit" onKeyPress={(e) => search_bar_enter(e) }/>
    <button className="search-button" onClick={() => search(true)}>Search</button>
    <p className="searched">{"Searching for r/"+searched}</p>
    </>
  );
}
//HI
export default App;
