import { AddTask, TaskList } from "src/features/task";
import { TasksProvider } from "src/features/task/stores/TaskContext";

export function TaskManagementView() {
  return (
    <TasksProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
