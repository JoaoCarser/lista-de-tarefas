import React from 'react'
import "./TodoList.css"

function TodoList(){
    return(
        <div>
            <h1>Lista de Tarefas</h1>
            <form action="">
                <input placeholder='Adicione uma tarefa' type="text" />
                <button type='submit' className='add'>Adicionar</button>
            </form>
            <div className='listaTarefas'>
                <div className='item'>
                    <span>Tarefa exemplo</span>
                    <button>Deletar</button>
                </div>
                <div className='item completo'>
                    <span>Tarefa exemplo</span>
                    <button>Deletar</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList