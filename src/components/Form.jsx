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
          placeholder="Write your next task..."
        />
      </label>
      
      <button>
        <span className="visually-hidden">Submit</span>
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
        >
          <path
            d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
            fill="#bd8b99" stroke="#bd8b99"
          />
        </svg>
      </button>
    </form>
  );
};

export default Form;