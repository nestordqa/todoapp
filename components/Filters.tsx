import { Filters } from '../app/types';
import dark from '../styles/Dark.module.css';
import light from '../styles/Light.module.css';


const Filters = ({all, actives, completed, clearCompleted, tasks, theme}:Filters)=>{
    return(
        <>
            <div className={theme ? light.filtersContainer : dark.filtersContainer}>
                <div className='w-1/8'>
                    <p>{tasks} items left.</p>
                </div>
                <div className={theme ? light.filtersButtons : dark.filtersButtons}>
                    <div className={dark.filterButton}>
                        <button onClick={()=>all()}>
                            All
                        </button>
                    </div>
                    <div className={dark.filterButton}>
                        <button onClick={()=>actives()}>
                            Active
                        </button>
                    </div>
                    <div className={dark.filterButton}>
                        <button onClick={()=>completed()}>
                            Completed
                        </button>
                    </div>
                </div>
                <div className={dark.filterButton}>
                    <button onClick={()=>clearCompleted()}>
                        Clear Completed
                    </button>
                </div>
            </div>
        </>
    );
};

export default Filters;