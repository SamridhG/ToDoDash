 import deleteImg from '../texture/delete.png'
 import { deleteNote } from '../config/firebase';
const Note=({detail})=>{ 
  const {id,notetag}=detail
const onClickDelete=()=>{
  deleteNote(id)
}
return (
    <div className="py-2 my-2 flex justify-between border-b-2 border-dashed border-black">
      <div className='m-2 w-[380px] h-auto text-3xl break-words font-mono'>{notetag}</div>
      <img className='w-[50px] h-[50px]' src={deleteImg} onClick={onClickDelete}/>
    </div>
)
}

export default Note;