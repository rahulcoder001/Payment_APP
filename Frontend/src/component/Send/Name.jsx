

const Name = ({name})=>{
      return <div className="flex items-center">
         <div className="flex w-10 p-2 m-1  justify-center items-center rounded-full bg-green-500 text-white font-semibold text-xl">
            {name[0]}
         </div>
         <h1 className="text-2xl ml-3 font-semibold">{name}</h1>
      </div>
}

export default Name;