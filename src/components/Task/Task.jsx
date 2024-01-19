import Checkbox from "./Checkbox/Checkbox";
import "./task.css";

const Task = ({ n }) => {
	return (
		<div className="task">
			{/* Checkbox */}
			<Checkbox isChecked={false} />
			testTask {n}
		</div>
	);
};
export default Task;
