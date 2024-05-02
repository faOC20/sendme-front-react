import {SearchIcon} from "../../assets/icons/SearchIcon"

export const SearchBar = ()=>{
    return (
       
      <div class='flex items-center flex-grow items min-w-search-bar-size w-5/12'>
        
        <form class="flex  items-center justify-center w-11/12 border-2 rounded-full h-10 p-2" action="get">
            
            <input class="w-full bg-transparent text-white outline-none" type="text" placeholder='text here...'/>
            
            <button type="submit">
              <SearchIcon/>
            </button>
        </form>
        
      </div>

    )
}
