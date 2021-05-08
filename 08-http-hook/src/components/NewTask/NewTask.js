import { useEffect, useState } from "react";
import { useHttpRequest } from "../../hooks/use-http-request";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, requestTask: addNewTaskRequest } = useHttpRequest();

  const enterTaskHandler = (taskText) => {
    
    const newTaskCallback = (data) => {
      const generatedId = data.name;
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
    };

    addNewTaskRequest(
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      newTaskCallback
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
