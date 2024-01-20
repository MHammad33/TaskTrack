import Checkbox from "./Checkbox/Checkbox";
import "./task.css";

const Task = ({ taskName, isDone }) => {
	return (
		<div className="task">
			{/* Checkbox */}
			<Checkbox isChecked={isDone} />
			{taskName}
		</div>
	);
};
export default Task;
