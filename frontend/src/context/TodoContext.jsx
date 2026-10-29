import { createContext, useContext } from "react";
import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todo, setTodo] = useState([])
    const [input, setInput] = useState("")
    const [flag, setFlag] = useState(false)

    async function getAll() {
        const api = await axios.get("http://localhost:8001/todo/getAll")
        setTodo(api.data.data)
        console.log(api)
    }

    async function addTodo() {
        try {
            const data = {
                title: input
            }

            setFlag(false)

            const api = await axios.post(
                "http://localhost:8001/todo/create",
                data
            )

            if (!api.data.success) {
                throw new Error(api.data.message)
            }

            toast.success(api.data.message)
            setInput("")
            setFlag(true)

        } catch (error) {
            toast.error("Kindly enter atleast 3 Characters")
            setFlag(true)
        }
    }

    async function delTodo(id) {
        const api = await axios.delete(`http://localhost:8001/todo/delete/${id}`)
        console.log(api)
        getAll()
        toast.success(api.data.message)
    }

     async function editTodo(id, data) {
        const api = await axios.put(`http://localhost:8001/todo/update/${id}`, data)
        console.log(api)
        getAll()
        toast.success(api.data.message)
    }

    useEffect(() => {
        getAll()
    }, [flag])

    return (
        <TodoContext.Provider value={{
            todo,
            input,
            setInput,
            addTodo,
            delTodo,
            editTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

//custom hook
export const useTodo = () => useContext(TodoContext);

