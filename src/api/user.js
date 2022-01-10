import Axios from "axios"


export const getUserList = () => {
   return Axios.get("https://jsonplaceholder.typicode.com/todos")
}

export const getUserDetail = (id) => {
    return Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
 }