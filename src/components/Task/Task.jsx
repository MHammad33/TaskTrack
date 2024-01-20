import Checkbox from "./Checkbox/Checkbox";
import "./task.css";

const Task = ({ taskName, isDone, handleDone }) => {
	return (
		<div className={`task ${isDone ? "done" : ""}`}>
			{/* Checkbox */}
			<Checkbox isChecked={isDone} handleDone={handleDone} />
			<span>{taskName}</span>
		</div>
	);
};
export default Task;
