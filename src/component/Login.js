import SubmitButton from "./SubmitButton"
const Login=()=>{
  const parentClass="flex flex-col relative h-28"
  const labelClass="p-1 absolute top-[-26px] left-5 bg-white text-4xl text-tomatoOrange font-mono"
  const inputClass="p-4 h-20 bg-white border border-tomatoOrange rounded-lg text-5xl font-extralight text-tomatoOrange font-mono  focus:outline-none"
  const handleSubmit=(event)=>{
         event.preventDefault();
        // console.log("Hello")
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="m-4 p-10 bg-white rounded-3xl shadow-red-800 shadow-2xl">
        <h1 className="mb-12 text-5xl text-center font-mono text-tomatoOrange">Login</h1>
       <div className={parentClass}>
       <label className={labelClass}>Email</label>
       <input className={inputClass} type="email"></input>
       </div>
       <div className={parentClass}>
       <label className={labelClass}>Password</label>
       <input className={inputClass} type="password"></input>
       </div>
       <div type="submit" className="flex flex-row-reverse">
       <SubmitButton data={{tag:"Login"}}/>
       </div>
      </form>
    </div>
  )
}
export default Login