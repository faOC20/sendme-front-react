import { useState } from "react"
import {SearchIcon} from "../../assets/icons/SearchIcon"
import { Link } from "react-router-dom"

export const SearchBar = ()=>{

    const [query, setQuery] = useState('')

    const handleSubmit = (event) => {
     
      event.preventDefault()
      window.location.href = `/search/${query}`;
      localStorage.removeItem('searching-storage')
    }
    
    
    const handleChange = (e)=>{
      setQuery(e.target.value)
    }

    return (
       
      <div class='flex items-center flex-grow items min-w-search-bar-size w-5/12'>
        
        <form onSubmit={handleSubmit} class="flex  items-center justify-center w-11/12 border-2 rounded-full h-10 p-2">
            
            <input onChange={handleChange} class="w-full bg-transparent text-white outline-none" type="text" placeholder='text here...'/>
            
            <button type="submit">
              <SearchIcon/>
            </button>
        </form>
        
      </div>

    )
}
