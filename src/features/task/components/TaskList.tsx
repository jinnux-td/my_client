import { Task } from "src/features/task";
import { TTask } from "src/features/task/types/types";

export function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: {
  tasks: TTask[];
  onChangeTask: (task: TTask) => void;
  onDeleteTask: (id: number) => void;
}) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}
