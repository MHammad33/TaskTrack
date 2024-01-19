import "./task.css";

const Task = ({ n }) => {
	return (
		<div className="task">
			<input type="checkbox" />
			testTask {n}
		</div>
	);
};
export default Task;
