import React, { useState, useEffect } from 'react'
import "./TodoList.css"
import Icone from './assets/icon.png'

function TodoList() {

    // PEGUE UM ITEM QUE JA ESTEJA SALVO NO LOCALSTORAGE "NAVEGADOR" SE HOUVER
    const listaStorage = localStorage.getItem('Lista');

    // ESTADOS
    const [lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage) : [] );
    const [newItem, setNewItem] = useState("");

    useEffect(()=>{
        localStorage.setItem('Lista', JSON.stringify(lista));
    }, [lista])

    // FUNÇOES
    function adicionaItem(form) {
        form.preventDefault();

        // SE NÃO EXISTIR NOVO ITEM RETORNE NADA
        if (!newItem) {
            return;
        }

        // COPIE O QUE JA TEM NA LISTA, ACRESCENTE O NOVO ITEM, INICIE A TAREFA COMO INCOMPLETA
        setLista([...lista, { text: newItem, isCompleted: false }]);
        setNewItem("");
        document.getElementById('input-entrada').focus();
    }

    function clicou(index) {
        // LISTA AUXILIAR RECEBE A LISTA
        const listaAux = [...lista];
        // O INDICE DAQUELA POSIÇÃO RECEBE O VALOR CONTRARIO DELE MESMO (COMPLETO OU NAO)
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux);
    }

    function deleta(index) {
        // LISTA AUXILIAR RECEBE A LISTA
        const listaAux = [...lista];

        // REMOVE O ITEM QUE ESTA EXATAMENTE NA POSIÇÃO DO ITEM
        listaAux.splice(index, 1);
        setLista(listaAux);
    }

    function deletaTudo(){
        setLista([]);
    }

    // RETORNO
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input id='input-entrada' placeholder='Adicione uma tarefa' value={newItem} onChange={(e) => { setNewItem(e.target.value) }} type="text" />
                <button type='submit' className='add'>Adicionar</button>
            </form>
            <div className='listaTarefas'>

                {/* NO REACT O STYLE É UTILIZADO EM CAMELCASE */}
                <div style={{ textAlign: 'center' , marginTop: '-30px' }}>
                    {
                        lista.length < 1
                            ?
                            <img src={Icone} className='icone-central' />
                            :
                            // PERCORRA TODA A LISTA, SE O ITEM ESTIVER COMPLETO MOSTRE ELE COMPLETO SE NAO, MOSTRE INCOMPLETO
                            lista.map((item, index) => (
                                <div key={index} className={item.isCompleted ? 'item completo' : 'item'}>
                                    <span onClick={() => { clicou(index) }}>{item.text}</span>
                                    <button onClick={() => { deleta(index) }} className='del'>Deletar</button>
                                </div>))
                    }
                    {
                        // SE A UNICA CONDIÇÃO FOR ATENDIDA O BOTAO APARECE
                        lista.length > 0 && <button onClick={() => { deletaTudo() }} className='deleteAll'>Apagar todos</button>
                    }

                </div>
            </div>
        </div>
    )
}

export default TodoList