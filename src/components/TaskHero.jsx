function TaskHero({ tasks_completed, tasks_total }) {
  
  return (
    <section>
      <div>
        <p>Task Done</p>
        <p>Keep it up</p>
      </div>
      <div>
        {tasks_completed}/{tasks_total}
      </div>
    </section>
  );
}

export default TaskHero;