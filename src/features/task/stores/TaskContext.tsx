import { createContext, useContext, useReducer } from "react";
import { TTask } from "src/features/task/types/types";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export const TasksContext = createContext<TTask[] | null>(null);
export function useTasks() {
  return useContext(TasksContext)!;
}

export const TasksDispatchContext = createContext<React.ActionDispatch<
  [action: TTasksReducerAction]
> | null>(null);
export function useTasksDispatch() {
  return useContext(TasksDispatchContext)!;
}

export type TTasksReducerAction =
  | {
      type: "added";
      id: number;
      text: string;
    }
  | {
      type: "changed";
      task: TTask;
    }
  | {
      type: "deleted";
      id: number;
    };
export function tasksReducer(tasks: TTask[], action: TTasksReducerAction) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action);
    }
  }
}
