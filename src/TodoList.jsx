import React from 'react'
import "./TodoList.css"

function TodoList(){
    return(
        <div>
            <h1>Lista de Tarefas</h1>
            <form action="">
                <input placeholder='Adicione uma tarefa' type="text" />
                <button>Adicionar</button>
            </form>
        </div>
    )
}

export default TodoList