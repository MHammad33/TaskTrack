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

	const removeTask = (indexToRemove) => {
		setTasks((prev) => {
			return prev.filter((taskObj, index) => index !== indexToRemove);
		});
	};

	const completedTasks = tasks.filter((task) => task.isDone).length;
	const totalTasks = tasks.length;
	const getMessage = () => {
		const percentage = (completedTasks / totalTasks) * 100;
		if (percentage === 0) {
			return "Try to complete at least one task!";
		} else if (percentage === 100) {
			return "Nice job for today!";
		} else if (percentage < 50) {
			return "Try to complete some tasks. You can do it!";
		}
		return "You are doing great. Keep it going!";
	};

	return (
		<main>
			<h1>Task Tracker</h1>
			<h2>
				{completedTasks}/{totalTasks} Completed
			</h2>
			<h2>{getMessage()}</h2>
			<TaskForm addTask={addTask} />
			{tasks &&
				tasks.map((task, i) => (
					<Task
						key={i}
						{...task}
						handleTrash={() => removeTask(i)}
						handleDone={() => updateDone(task, i)}
					/>
				))}
		</main>
	);
}

export default App;
