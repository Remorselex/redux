import { useEffect } from "react";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useActions } from "../../hooks/useActions";

const UserList = () => {
  const {users,error,loading} = useTypeSelector(state => state.user)
  const {fetchUsers} = useActions()
  useEffect(()=>{
    fetchUsers();
  },[])
  
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>{error}</h1>
  return (<div>
    <div>{users.map(user => 
      <div key={user.id}>{user.name}</div>)}
    </div>
  </div>);
};

export default UserList;