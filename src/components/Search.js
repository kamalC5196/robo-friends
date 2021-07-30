function Search(props){
    return(
        <div className="pa2">
            <input className="pa3 ba b--green" type="search" placeholder="search" onChange={props.searchChange} />
        </div>
    )
}

export default Search;