function Form({ tasks, setTasks }) {

  const handleSubmit = (event) => {
    event.preventDefault();

    const value = event.target.task.value;
    const newTask = {
      title: value,
      id: self.crypto.randomUUID(),
      is_completed: false,
    };

    // update task state
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // store updated task list in local storage
    const updatedTaskList = JSON.stringify([...tasks, newTask]);
    localStorage.setItem("tasks", updatedTaskList);

    event.target.reset(); // reset the form
  }; 

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="task">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Write your next task"
        />
      </label>
      
      <button>
        <span className="visually-hidden">Submit</span>
        <svg>
          <path d="" />
        </svg>
      </button>
    </form>
  );
};

export default Form;