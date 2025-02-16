"use client";

import React from "react";
import Header from "@/components/Header";
import Form from "@/components/Form";
import TaskHero from "@/components/TaskHero";
import TaskItem from "@/components/TaskItem";
import TaskList from "@/components/TaskList";

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <TaskHero tasks_completed={0} tasks_total={0} />
      <Form />
      <TaskList tasks={[]} />
    </div>
  );
}

export default Home;