import { Props } from '../app/types';
import { useState } from 'react';
import dark from '../styles/Dark.module.css';
import light from '../styles/Light.module.css';

const Task = ({task, clickHandlerClose, clickHandlerComplete, complete, theme}:Props) => {
    const [completed, setCompleted] = useState<boolean>(false);
    // const click = () =>{
    //     clickHandlerComplete(task);
    //     tasks
    // };

    return(
        
    <>
    <div className={theme ? light.task : dark.task}>
        <div className={theme ? light.completeButton : dark.completeButton}>
            {
                complete == false ?
                <button className={'w-full h-full'} onClick={()=>clickHandlerComplete(task)}>
                    
                </button> 
                :
                <button className={dark.completedButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
                </button>
            }
        </div>
        {
            complete == false ?
                <div className={dark.taskContent} onClick={()=>clickHandlerComplete(task)}>
                    <p>{task.content}</p>
                </div>
                :
                <div className={dark.taskContentComplete} onClick={()=>clickHandlerComplete(task)}>
                    <p className={light.content}>{task.content}</p>
                </div>

        }
        <div className={dark.closeButton}>
            <button onClick={()=>clickHandlerClose(task)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
            </button>
        </div>

    </div>
    </>
    );
};

export default Task;