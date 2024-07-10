const Input = ({title,id,onchange}) =>{
    return <div className=" flex flex-col">
        <label className="text-sm font-semibold p-2" htmlFor={id}>{title}</label>
        <input onChange={onchange} className=" p-1 border-2 rounded-md border-gray-500 ml-3 mr-3" id={id} type="text" />
    </div>
}

export default Input;