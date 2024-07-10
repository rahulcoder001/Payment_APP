



const Amount = ({onchange}) => {
  return (
    <div className="">
       <p className="font-semibold text-start mt-2">Amount (in Rs)</p>
       <input onChange={onchange} type="text" className="border-2 w-full p-2 mt-2 rounded-md" placeholder="Enter Amount" />
    </div>
  )
}

export default Amount
