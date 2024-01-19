import { logDOM } from "@testing-library/react";
import { useState } from "react";

const TaskForm = () => {
	const [taskName, setTaskName] = useState("");
	console.log("taskName", taskName);
	const handleChange = (e) => setTaskName(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		setTaskName("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<button type="submit">+</button>
			<input
				type="text"
				value={taskName}
				onChange={handleChange}
				placeholder="Your next task..."
			/>
		</form>
	);
};
export default TaskForm;
