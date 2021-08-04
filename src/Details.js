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
            <h3 onClick={() => handleClick(user.id)} style={{cursor: 'pointer'}}>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.gender}</p>
            {  
                appIndex === index && <section style={{marginLeft: '50px'}}>
                    <h3>Todos:</h3>
                {
                    todos.map(todo => (
                        <>
                            <p>Title: {todo.title}</p>
                            <p>Status: {todo.status}</p>
                            <hr />
                        </>
                    ))
                }
            </section>
            }
        </div>
    )
}
export default Details