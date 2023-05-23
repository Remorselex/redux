import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypeSelector } from "../../hooks/useTypeSelector";

const TodoList = () => {
  const { page, loading, limit, error, todos} = useTypeSelector(state => state.todo);
  const {fetchTodos} = useActions();

  useEffect(()=>{
    fetchTodos(page,limit)
  },[])

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>{error}</h1>
  return (
  <div>
    {todos.map(todo => 
        <div key={todo.id}>{todo.id} - {todo.title}</div>
      )}
  </div>
  );
}

export default TodoList;