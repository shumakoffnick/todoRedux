import React, {useState} from "react"
import { useDispatch, useSelector } from 'react-redux'
import Item from "./Item"
import { addUsers } from "./store/slice/slice"
const App = ()=>{
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")  
  const dispatch = useDispatch()
  const addNew = (title, text)=>{
    dispatch(addUsers({

      title: title,
      text: text,
    }))
    setText("")
    setTitle("")
  }
 
  const newItem = useSelector((state)=>state.user)
  return(
    <>
    <div className="main">
    <div className="app">
      <h1 className="todoTitle">ToDo List</h1>
    <div className="firstInput">
    <input placeholder="Название" className="theInp" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    </div>
    <div className="secondInput">
    <input placeholder="Описание" className="theInp" value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
    <button className="btn" onClick={()=>addNew(title, text)}>Push</button>
    {newItem.map((t)=> (
      <div key={t.id}>
      <Item itemId={t.id} itemTitle={t.title} itemText={t.text} />
      </div>
    ))}
    </div>
    </div>
    </>
  )
}
export default App