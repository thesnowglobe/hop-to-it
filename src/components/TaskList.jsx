import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <ol className="todo_list">
      {tasks && todos.length > 0 ? (
        tasks?.map((item, index) => <TaskItem key={index} item={item} />)
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}
export default TaskList;
