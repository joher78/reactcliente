import { useState } from "react";

export function ListUser() {
 
   const [users, setUsers] = useState([])
    
    const  list = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setUsers(json))
        .catch(err => console.error(err))
    

    
    }
    return (
        <div>
            <button onClick={list}>Listar</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.id} -{user.userId} - {user.body} - {user.title}</li>
                ))}
            </ul>
        </div>
    )
}