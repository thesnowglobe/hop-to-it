import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <ol className="task_list">
      {tasks && tasks.length > 0 ? (
        tasks?.map((item, index) => <TaskItem key={index} item={item} />)
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}
export default TaskList;
