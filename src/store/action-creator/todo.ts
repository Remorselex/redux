import { Dispatch } from "react"
import { TodoAction, TodoActionsTypes } from "../../types/todo"
import axios from "axios"

export const fetchTodos = (page = 1, limit = 10) => {
  return async(dispatch: Dispatch<TodoAction>) => {
    try{
      dispatch({type: TodoActionsTypes.FETCH_TODOS})
      const responce = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {_page: page, _limit: limit}
      })
      setTimeout(()=>{
        dispatch({type: TodoActionsTypes.FETCH_TODOS_SUCCESS,
           payload: responce.data})
      }, 500)
    } catch(error){
      dispatch({type: TodoActionsTypes.FETCH_TODOS_ERROR,
         payload: `${error}`})
    }
  }
}

export function setTodoPage(page: number): TodoAction {
  return {type: TodoActionsTypes.SET_TODO_PAGE, payload: page}
}