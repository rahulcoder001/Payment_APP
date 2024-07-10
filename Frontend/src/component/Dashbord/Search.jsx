
const Search = ({onchange})=>{
    return <div className="ml-5  mr-2">
        <h1 className="font-bold text-md">Users</h1>
        <input onChange={onchange} className="border-2 w-full p-1 mt-2 " type="text" placeholder="Search users..." />
    </div>
}

export default Search;