import { useState } from "react";
import "./taskForm.css";

const TaskForm = ({ addTask }) => {
	const [taskName, setTaskName] = useState("");

	const handleChange = (e) => setTaskName(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		addTask(taskName);
		setTaskName("");
	};

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<button className="form-button" type="submit">
				+
			</button>
			<input
				type="text"
				className="form-input"
				value={taskName}
				onChange={handleChange}
				placeholder="Your next task..."
			/>
		</form>
	);
};
export default TaskForm;
