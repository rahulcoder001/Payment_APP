

const Header = ({name})=>{
    return <div className="border-t-4 border-b-2 flex justify-between mt-2">
        <h1 className="font-bold text-2xl p-3 pl-5">Payments App</h1>
        <div className="flex m-2 ">
        <p className="p-2 font-semibold text-sm">Hello,{name}</p>
        <div className=" m-1 w-8 flex justify-center items-center rounded-full bg-slate-300">
            {name[0]}
        </div>
        </div>
    </div>
}

export default Header;