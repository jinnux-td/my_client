import { Task } from "src/features/task";
import { useTasks } from "src/features/task/stores/TaskContext";

export function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
