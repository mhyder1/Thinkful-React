import { useState, useEffect } from 'react'
const Details = ({user, appIndex, setAppIndex, index}) => {
    // hold the id of the current set of todos
    // here I will get the todo with id 105
    const [id, setId] = useState(105)

    // holds the todo data from the api call
    const [todos, setTodos] = useState([])

    // when the id changes, a new api call will be made
    useEffect(() => {
        const url = `https://gorest.co.in/public/v1/users/${id}/todos`
        fetch(url)
        .then(res => res.json())
        .then(({data}) => setTodos(data))
    },[id])

    // updates the current id and the current index
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
                // only display a todo if the indexes match
                appIndex === index && 
                <section style={{marginLeft: '50px'}}>
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