import React, { useState } from 'react'
import "./SearchBar.css"

const SearchBar = ({onSearch}) => {
    const[city,setCity] = useState("")

    const handleSearch= () =>{
        onSearch(city);
        
    }
  return (

    <div className='searchBar'>
        <input 
        type="text" 
        value={city} 
        placeholder='Enter city name' 
        onChange={(e)=>setCity(e.target.value)} />
     <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar