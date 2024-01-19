import "./App.css";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
	return (
		<div>
			<TaskForm />
			<Task n={1} />
			<Task n={2} />
			<Task n={3} />
			<Task n={4} />
			<Task n={5} />
		</div>
	);
}

export default App;
