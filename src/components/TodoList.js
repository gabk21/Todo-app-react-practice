import React from 'react'
import Todo from "./Todo"

function TodoList({todos, setTodos}) {
  return (
    <div>
        <ul>
            {todos.map(todo => (
                <Todo
                todos={todos}
                setTodos={setTodos}
                text={todo.text}
                key={todo.id}
                todo={todo} //set to complete the function of the complete button
                 />
            ))}
        </ul>
    </div>
  )
}

export default TodoList