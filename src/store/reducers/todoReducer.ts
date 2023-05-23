import { ITodoState, TodoAction, TodoActionsTypes } from "../../types/todo";

const initialState: ITodoState = {
  todos: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false,
}

export const todoReducer = (state: ITodoState = initialState, action: TodoAction): ITodoState => {
  switch(action.type) {
    case TodoActionsTypes.FETCH_TODOS: 
      return {...state ,loading: true};
    case TodoActionsTypes.FETCH_TODOS_SUCCESS:
      return {...state, loading: false, todos: action.payload}
    case TodoActionsTypes.FETCH_TODOS_ERROR:
      return {...state, loading: false, error: action.payload}
    case TodoActionsTypes.SET_TODO_PAGE:
      return {...state, page: action.payload}
    default:
      return state;
  }
}