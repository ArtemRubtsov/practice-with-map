import { useEffect, useState } from "react"


type UserType = {
    
 
}



export const Users = () => {

    const [users, setUser] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then(users => {
            setUser(users)
        })
    }, [])
    
  return (
    <div>Users</div>
  )
}
