import {createSlice} from "@reduxjs/toolkit"
const initialState = []
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        addUsers(state, action){
            if(action.payload.title === ""){
                console.log("Ошибка тайтла")
                
            }
            else if(action.payload.text === ""){
                console.log("Ошибка текста")
            }
            else{
                const newTask = {
                    id: Math.random(),
                    title: action.payload.title,
                    text: action.payload.text,
                    
                }
                state.push(newTask)
            }   
                  
        },
        removeUser(state,action){
            return state.filter((item)=>item.id !==action.payload.id)
            
        }
    }
})
export const {addUsers,removeUser} = userSlice.actions
export default userSlice.reducer