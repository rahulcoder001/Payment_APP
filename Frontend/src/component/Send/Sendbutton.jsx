

const Sendbutton = ({onpress}) => {
  return (
    <div className="mt-5 mb-5">
       <button onClick={onpress} className="w-full p-2 rounded-md font-bold text-white bg-green-500">Initiate</button>
    </div>
  )
}

export default Sendbutton
