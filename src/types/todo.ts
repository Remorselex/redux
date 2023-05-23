export interface ITodoState{
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionsTypes{
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface IFetchTodoAction{
  type: TodoActionsTypes.FETCH_TODOS;
}

interface IFetchTodoSuccessAction{
  type: TodoActionsTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}

interface IFetchTodoErrorAction{
  type: TodoActionsTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface ISetTodoPageAction{
  type: TodoActionsTypes.SET_TODO_PAGE;
  payload: number;
}

export type TodoAction = 
IFetchTodoAction 
| IFetchTodoSuccessAction 
| IFetchTodoErrorAction 
| ISetTodoPageAction;

