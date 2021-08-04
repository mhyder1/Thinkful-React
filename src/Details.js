import { useState, useEffect } from 'react'
const Details = ({user, appIndex, setAppIndex, index}) => {
    const [id, setId] = useState(105)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const url = `https://gorest.co.in/public/v1/users/${id}/todos`
        fetch(url)
        .then(res => res.json())
        .then(({data}) => setTodos(data))
    },[id])

    const handleClick = (id) => {
        setId(id)
        setAppIndex(index)
    }

    return (
        <div style={{borderBottom: "1px solid black"}}>
            <p onClick={() => handleClick(user.id)}>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.gender}</p>
            {  
                appIndex === index && <section style={{border: '1px solid red'}}>
                {
                    todos.map(todo => (
                        <>
                            <p>{todo.title}</p>
                            <p>{todo.status}</p>
                        </>
                    ))
                }
            </section>
            }
        </div>
    )
}
export default Details