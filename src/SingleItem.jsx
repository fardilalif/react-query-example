import { useDeleteTask, useUpdateTask } from "./reactQueryCustomHooks.jsx";

const SingleItem = ({ item }) => {
  const { updateTask } = useUpdateTask();
  const { deleteTask, isLoading } = useDeleteTask();
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={(e) =>
          updateTask({ taskId: item.id, isDone: e.target.checked })
        }
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask(item.id)}
        disabled={isLoading}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
