import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks }) {
  return (
    <ol className="task_list">
      {tasks && tasks.length > 0 ? (
        tasks?.map((item, index) => (
          <TaskItem key={index} item={item} tasks={tasks} setTasks={setTasks} />
        ))
      ) : (
        <p>Taking a little break? Your tasks are patiently waiting! 🐰💭</p>
      )}
    </ol>
  );
}

export default TaskList;
