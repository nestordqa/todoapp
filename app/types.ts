export interface task{
    content: string,
    completed: boolean
};

export interface Props{
    task: task,
    complete: boolean,
    clickHandlerClose: any,
    clickHandlerComplete: any,
    theme: boolean
};

export interface Filters{
    all: any,
    actives: any,
    completed: any,
    clearCompleted: any,
    tasks: number,
    theme: boolean
};
