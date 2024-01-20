import { useState } from "react";
import "./App.css";
import Task from "./components/Task/Task";
import TaskForm from "./components/TaskForm/TaskForm";

function App() {
	const [tasks, setTasks] = useState([]);

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
