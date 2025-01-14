import React, { useState, useEffect } from 'react';

function useTaskStatus() {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  useEffect(() => {
    const storedTaskStatus = localStorage.getItem('taskStatus');
    if (storedTaskStatus) {
      setIsTaskCompleted(JSON.parse(storedTaskStatus));
    }
  }, []);

  const toggleTaskStatus = () => {
    const newTaskStatus = !isTaskCompleted;
    localStorage.setItem('taskStatus', JSON.stringify(newTaskStatus));
    setIsTaskCompleted(newTaskStatus);
  };

  return { isTaskCompleted, toggleTaskStatus };
}

function App2() {
  const { isTaskCompleted, toggleTaskStatus } = useTaskStatus();

  return (
    <div className="App">
      <h1 style={{ color: isTaskCompleted ? 'green' : 'red' }}>
        {isTaskCompleted ? '✓ Task Completed' : ' Task Not Completed'}
      </h1>
      <button onClick={toggleTaskStatus}>Toggle Task</button>
    </div>
  );
}

export default App2;
