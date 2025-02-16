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
      <TaskHero tasks_completed={0} tasks_total={0} />
      <Form setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Home;