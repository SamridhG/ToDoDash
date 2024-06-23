const SubmitButton=({data})=>{
    const {tag}=data
     return (
    <button className="m-2 p-3 shadow-lg rounded-xl bg-gradient-to-br from-lightTomatoOrange to-tomatoOrange font-mono text-4xl text-white">{tag}</button>
 )
}
export default SubmitButton;