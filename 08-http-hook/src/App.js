import React, { useCallback, useEffect, useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import { useHttpRequest } from "./hooks/use-http-request";

function App() {
  const [tasks, setTasks] = useState([]);

  const transformeTaskCallback = useCallback((data) => {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  const { isLoading, error, requestTask: fetchTasks } = useHttpRequest();

  useEffect(() => {
    fetchTasks(
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
      transformeTaskCallback
    );
  }, [fetchTasks, transformeTaskCallback]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
