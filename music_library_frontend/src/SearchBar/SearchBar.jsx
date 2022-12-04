import React, { useState} from 'react';

const SearchBar = (props) => {

    const [searchedItem, setSearchedItem] = useState("Search By Keyword Here")

    function handleSubmit(event) {
        event.preventDefault();

    let itemSearch = {
        searchedItem: searchedItem
    };
    
    props.searchedItem(itemSearch);
    }

    

    return ( 
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Search</label>
            <input value={searchedItem} onChange={(event) => setSearchedItem(event.target.value)} onfocus="this.value=''" >
            </input>

        </div>
        </form>
    </div> );
}
 
export default SearchBar;