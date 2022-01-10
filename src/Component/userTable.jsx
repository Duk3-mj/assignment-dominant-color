import React, { useImperativeHandle } from "react"
import { getUserList } from "../api/user"


const UserTable = (props) => {
    const [todo, setTodo] = React.useState([])
    const [serachValue , setSearchValue] = React.useState("")

    React.useEffect(() => {
        getUserList().then(response => { setTodo(response.data.slice(0, 50)) })
    }, [])
    const viewUser = (id ,todoId ,title) =>{
      props.getUserId(id)
      props.getTodoId(todoId)
      props.getTodoTitle(title)
    }
    const sortOnId = () => {
        console.log("sort")
        setTodo(todo.reverse())
    }
    React.useEffect(() => {
        if(serachValue === "")
        getUserList().then(response => { setTodo(response.data.slice(0, 50)) })
        const searchTodo = todo.filter((item) => {
            if(item.id == serachValue)
            return item
            if(item.title.indexOf(serachValue) >= 0)
            return item
        })
        setTodo(searchTodo)
    },[serachValue])
    const searchHandle = (e) => {
        setSearchValue(e.target.value)
        
    }
    return (
        <>
        <div style={{display:"grid" , gridTemplateColumns:"50% 50%"}}>{console.log(todo)}
            <h1>Todos</h1>
            <input type="text"  value={serachValue} placeholder="Search" onChange={searchHandle}></input>
        </div>
            <div>
                <table >
                    <tr style={{ border: " 2px solid black" }}>
                        <td>Todo Id <button onClick={sortOnId}>Sort</button></td>
                        <td>Title</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </table>
            </div>
            {todo.length > 0 && <>
                {todo.map((item,pos) => {
                    return (
                        <>
                            <table>
                                <tr key={pos}style={{border:" 2px solid black"}}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.completed ? "Completed" : "Incomplete"}</td>
                                    <td><button onClick = {() => viewUser(item.userId ,item.id ,item.title)}>View User</button></td>
                                </tr>
                            </table>
                        </>
                    )
                })}
            </>}
        </>
    )
}

export default UserTable