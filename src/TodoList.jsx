import React, { useState } from 'react'
import "./TodoList.css"

function TodoList() {

    const [lista, setLista] = useState([]);
    const [newItem, setNewItem] = useState("");

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form action="">
                <input placeholder='Adicione uma tarefa' value={newItem} onChange={(e)=>{setNewItem(e.target.value)}} type="text" />
                <button type='submit' className='add'>Adicionar</button>
            </form>
            <div className='listaTarefas'>
                <div className='item'>
                    <span>Tarefa exemplo</span>
                    <button className='del'>Deletar</button>
                </div>
                <div className='item completo'>
                    <span>Tarefa exemplo</span>
                    <button className='del'>Deletar</button>
                </div>
                <button className='deleteAll'>Apagar todos</button>
            </div>
        </div>
    )
}

export default TodoList