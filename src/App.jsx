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
		setTasks(lsTasks);
	}, []);

	const addTask = (name) => {
		setTasks((prev) => {
			return [...prev, { taskName: name, isDone: false }];
		});
	};

	return (
		<main>
			<h1>Task Tracker</h1>
			<TaskForm addTask={addTask} />
			{tasks.map((task, i) => (
				<Task key={i} {...task} />
			))}
		</main>
	);
}

export default App;
