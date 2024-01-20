import { useEffect, useState } from "react";
import "./App.css";
import Task from "./components/Task/Task";
import TaskForm from "./components/TaskForm/TaskForm";

function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		if (tasks.length === 0) return;
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	useEffect(() => {
		const lsTasks = JSON.parse(localStorage.getItem("tasks"));
		if (lsTasks === null) return;
		setTasks(lsTasks);
	}, []);

	const addTask = (name) => {
		setTasks((prev) => {
			return [...prev, { taskName: name, isDone: false }];
		});
	};

	const updateDone = (task, index) => {
		const newTasks = [...tasks];
		newTasks[index].isDone = !task.isDone;
		setTasks(newTasks);
	};

	return (
		<main>
			<h1>Task Tracker</h1>
			<TaskForm addTask={addTask} />
			{tasks &&
				tasks.map((task, i) => (
					<Task key={i} {...task} handleDone={() => updateDone(task, i)} />
				))}
		</main>
	);
}

export default App;
