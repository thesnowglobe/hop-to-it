function Form({ tasks, setTasks }) {

  const handleSubmit = (event) => {
    event.preventDefault();

    const value = event.target.task.value;
    const newTask = {
      title: value,
      id: self.crypto.randomUUID(),
      is_completed: false,
    };
    
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
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
}

export default Form;