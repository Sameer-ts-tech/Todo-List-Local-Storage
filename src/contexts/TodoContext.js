import {createContext,useContext} from "react"
export const TodoContsxt = createContext({
    todos: [{
        id: 1,
        todo:"Todo msg",
        completed: false,
    }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{} 
})



export const useTodo = () =>{
    return useContext(TodoContsxt)
}
export const TodoProvider=TodoContsxt.Provider