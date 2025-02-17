function TaskHero({ tasks_completed, tasks_total }) {
  
  return (
    <section className="taskhero">
      <div>
        <p className="text_large">Your progress : </p>
        <p className="text_small">Keep it up ❤</p>
      </div>
      <div>
        {tasks_completed}/{tasks_total}
      </div>
    </section>
  );
}

export default TaskHero;