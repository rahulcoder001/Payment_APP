const Buttom = ({title,onpress})=>{
      return <div className="m-3">
        <button onClick={onpress} className="w-full font-semibold text-xl bg-black text-white rounded-md p-2">{title}</button>
      </div>
}

export default Buttom;