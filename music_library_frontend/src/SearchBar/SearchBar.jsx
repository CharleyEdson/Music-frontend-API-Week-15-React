import React, { useState} from 'react';

const SearchBar = ({searchedItem}, {songs}) => {

//take a step back, how do I ask what I'm trying to do?
//I'm trying to take in a filter search, in an input box.
//that input box should have a state variable set to '' which will then have a function to set it to any chnage
//I want that userInput variable to then be passed into the mapper component and filter the current array based on the user input.
//I need to be able to pass that userInput variable from searchbar to the component, into the mapper component
//I also need the musicmapper to continually update if the filter has changed-this is accomplished with the filtered search variable?

//Can I pass down the songs list, and have the search filter, filter and map over all the songs, and then re render if it changes?

    const [searchQuery, setSearchQuery] = useState("")
    const [filteredSearchResults, setFilteredSearchResults] = useState(songs)

    function onChange(event) {
        event.preventDefault();

    let searchQuery = {
        searchedItem: searchQuery
    };
    
    onChange(event)
        setSearchQuery(event.target.value);
    
    }
    

    return ( 
    <div>
      
        <div>
            <label>Search</label>
            <input type='text' value={searchQuery} onChange={onChange}>
            {/* <input type='text' value={userInput} onChange={(event) => setUserInput(event.target.value)} onfocus="this.value=''" > */}
            </input>

        </div>
    
    </div> );
}

 
export default SearchBar;