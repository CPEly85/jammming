import React, {useState, useCallback} from 'react'
import './SearchBar.css';   

function SearchBar(props) {
    const [term, setTerm] = useState("")

    // function search() {
    //     useCallback(() => {
    //         props.onSearch(term)
    //     }, [props.onSearch, term])
    //         }
    function handleTermChange(e) {
        setTerm(e.target.value)
    }

    const search = useCallback(() => {
        props.onSearch(term);
      }, [props.onSearch, term]);

    

    return (
        <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" 
  onChange={handleTermChange}/>
  <button className="SearchButton" onClick={search} >SEARCH</button>
</div>
    )
}

export default SearchBar