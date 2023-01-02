import { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import Task from './Task'
import { task } from '../app/types';
import Filters from './Filters';
import dark from '../styles/Dark.module.css';
import light from '../styles/Light.module.css';

const AllTask = ()=>{

    const [theme, setTheme] = useState<boolean>(false);

    const settingTheme = () => {
        setTheme(!theme);
    };

    const [newTask, setNewTask] = useState<task>({
        content:"",
        completed:false
    });

    const [message, setMessage]=useState<string>("There's nothing to do.")

    const [tasks, setTasks] = useLocalStorage<task[]>('tasks', []);

    const [toReturn, setToReturn] = useState<task[]>(tasks);

    const all = () =>{
        setToReturn(tasks);
    };
    const actives = () => {
        const filtered = tasks.filter(task => task.completed==false);
        setToReturn(filtered);
        if(filtered.length < 1){
            setMessage("There are not actives TO DO's")
        }
    };
    const completed = () =>{
        const filtered = tasks.filter(task => task.completed == true);
        setToReturn(filtered);
        if(filtered.length < 1){
            setMessage("There are not completed TO DO's")
        }
    };
    const clearCompleted = () => {
        const clear = tasks.filter(task => task.completed == false);
        setTasks(clear);
        setToReturn(clear);
        if(clear.length < 1){
            setMessage("There's nothing to do.")
        }
    };


    const clickHandlerClose = (deleteTask:task) =>{
        const filtered = tasks.filter(task => task.content !== deleteTask.content);
        setTasks(filtered);
        setToReturn(filtered);
        if(filtered.length < 1){
            setMessage("There's nothing to do.")
        }

    };

    const handlerChange = (e:any)=>{
        setNewTask({
            content: e.target.value,
            completed: false
        });
    };

    const createTask = ()=>{
        if(newTask.content.length > 1){
            setTasks([...tasks, newTask]);
            setToReturn([...tasks, newTask]);
            setNewTask({
                content: '',
                completed: false
            })
        };
        if(newTask.content.length < 1){
            alert('Write a task to submit')
        }        
    };

    const clickHandlerComplete = (complete:task) =>{
        const finder : any = tasks.find(task => task.content == complete.content);
        const completeYet = {
            content: finder.content,
            completed: true
        };
        const filtered = tasks.filter(task=> task.content !== complete.content);
        if(filtered !== undefined && completeYet !== undefined && filtered && completeYet){
            setTasks([...filtered, completeYet]);
            setToReturn([...filtered, completeYet]);
        };
  
        
    };

    return(
        <>
            <div className={dark.container}>
                <div className={theme ? light.bgContainer : dark.bgContainer}>

                </div>
                <div className={theme ? light.secondBg : dark.secondBg}>
                <div className={dark.appContainer}>
                    <div className={dark.titleContainer}>
                        <div className={dark.todo}>
                            TODO
                        </div>
                        <div className={dark.themeLogo} onClick={()=>settingTheme()}>
                            <div className={theme ? '' : light.sun}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
                            </div>
                            <div className={theme ? dark.moon : ''}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className={theme ? light.inputContainer : dark.inputContainer}>
                        <div onClick={()=>createTask()} className={theme ? light.completeButton : dark.completeButton}>
                            
                        </div>
                        <input onChange={(e)=>handlerChange(e)} placeholder='Create a new todo...' value={newTask.content} className={theme ? light.input : dark.input}/>
                    </div>
                    <div className={theme ? light.tasksContainer : dark.tasksContainer}>
                        <div>
                            {
                                toReturn.length !== 0 ?
                                toReturn.map((task)=>{
                                    return(<Task task={task} complete={task.completed} clickHandlerClose={clickHandlerClose} clickHandlerComplete={clickHandlerComplete} theme={theme}/>)
                                })
                                :
                                <h1 className={theme ? 'text-xl p-12 text-black font-bold' : 'text-xl p-12 text-white font-bold'}>{message}</h1>
                            }
                        </div>
                        <div>
                            <Filters all={all} actives={actives} completed={completed} clearCompleted={clearCompleted} tasks={tasks.length} theme={theme}/>
                        </div>
                    </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default AllTask;