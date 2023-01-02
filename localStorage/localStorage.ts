import useLocalStorage from 'use-local-storage';
import { task } from '../app/types';

export const [tasks, setTasks] = useLocalStorage<task[]>('tasks', []);

