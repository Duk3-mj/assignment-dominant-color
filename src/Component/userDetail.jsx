import React from "react"
import {getUserDetail} from "../api/user"


const UserDetails = (props) => {
    const [user , setUser] = React.useState()
    React.useEffect(() => {
        getUserDetail(props.userId).then(response => {setUser(response.data)})
    },[props.userId])
    return(
        <>{console.log(user)}

        {user != undefined && <div style={{border:"2px solid black"}}>
          <div>Todo Id : {props.todoId}</div> 
          <div>Todo Title : {props.todoTitle}</div> 
          <div>UserId : {user.id}</div> 
          <div>Name: {user.name}</div> 
          <div>Email :  {user.email}</div> 
        </div>}
        </>
    )
}

export default UserDetails