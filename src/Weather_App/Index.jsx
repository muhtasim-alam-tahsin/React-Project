

export default function Search({search,setSearch,handleSearch}){

    return <div className="search-engine">
        <input 
        type="text"
        className="city-search"
        placeholder="Enter city name"
        name="search"
        value={search}
        onChange={(event)=>setSearch(event.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>search</button>
        </div>
}