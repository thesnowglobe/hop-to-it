"use client";

import React from "react";
import Header from "@/components/Header";
import Form from "@/components/Form";
import TaskHero from "@/components/TaskHero";
import TaskItem from "@/components/TaskItem";
import TaskList from "@/components/TaskList";

function Home() {
  const [tasks, setTasks] = React.useState([]);

  const tasks_completed = tasks.filter(
    (task) => task.is_completed === true).length;
  const tasks_total = tasks.length;

  return (
    <div className="wrapper">
      <Header />
      <TaskHero tasks_completed={tasks_completed} tasks_total={tasks_total} />
      <Form tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default Home;