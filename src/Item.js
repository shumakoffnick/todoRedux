import React from "react";
import {removeUser} from './store/slice/slice'
import{useDispatch} from 'react-redux'
import {motion, AnimatePresence} from "framer-motion"
const Item = ({itemTitle, itemText, itemId})=>{
const dispatch = useDispatch()
const deleteItem = (id)=>{
    dispatch(removeUser({
        id: id
    }))
}

    return(
        <>
        <AnimatePresence>
        <motion.div className="item" initial={{opacity:0}} animate={{opacity: 1}}>
        <div className="itemTitle">{itemTitle}</div>
        <div className="itemText">{itemText}</div>
        <button className="itemBtn" onClick={()=>deleteItem(itemId)}>Delete</button>
        </motion.div>
        </AnimatePresence>
        
        </>
    )
}
export default Item