'use client'
import { useState } from 'react';
import { TaskList } from '../components/tasklist/TaskList';
import Popup from '../components/popup/Popup';

export default function NewPage() {
    const vazio = '';
    const [task, setTask] = useState(vazio);
    const [taskList, setTaskList] = useState([]);
    
    const addTask = () => {
        if(task.trim() !== '') {
            setTaskList([...taskList, task]);
            setTask(vazio);
        } else {
            <Popup msg={`test`}/>
        }
    }



    return(
        <>
            <h1>Olá</h1>
            <div>
                <h3>To Do list</h3>
                <input 
                type="text" 
                placeholder="Digite uma nova tarefa..."
                value={task}
                onChange={(param) => {
                    setTask(param.target.value);
                }} 
                />
                <button onClick={addTask}>Cadastrar</button>
            </div>
            {
                taskList.map((task, index) => (
                    <TaskList index={index} task={task}/>
                ))
            }
        </>
    );
}