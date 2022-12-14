import React from "react";
import "./SearchBar.css"

function SearchBar(placeholder, data){
    return (
        <div className = 'search'>
            <div className = 'searchInputs'>
                <input type = 'text' placeholder="Search"/>
                <div className = 'searchIcon'></div>
            </div>
            <div className = 'results'>
                {/* {data.map((value, key) => {
                    return <div> {} </div>
                })} */}
            </div>
        </div>
    )
}

export default SearchBar