import "./App.css";
import Task from "./components/Task/Task";
import TaskForm from "./components/TaskForm/TaskForm";

function App() {
	return (
		<main>
			<h1>Task Tracker</h1>
			<TaskForm />
			<Task n={1} />
			<Task n={2} />
			<Task n={3} />
			<Task n={4} />
			<Task n={5} />
		</main>
	);
}

export default App;
