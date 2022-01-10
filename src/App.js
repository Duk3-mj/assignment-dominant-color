import React from "react"
import UserDetails from "./Component/userDetail"
import UserTable from "./Component/userTable"

const App = () => {
  const [userId, getUserId] = React.useState()
  const [todoId, getTodoId] = React.useState()
  const [todoTitle, getTodoTitle] = React.useState()
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: " 50% 50%", gridGap: "50px" }}>
        <div>
          <UserTable getUserId={getUserId} getTodoId={getTodoId} getTodoTitle={getTodoTitle}></UserTable>
        </div>
        <div>
          <UserDetails userId={userId} todoId={todoId} todoTitle={todoTitle}></UserDetails>
        </div>

      </div>
    </>
  )
}

export default App