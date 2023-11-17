import SingleItem from "./SingleItem";
import { useFetchTasks } from "./reactQueryCustomHooks.jsx";
const Items = () => {
  const { data, isLoading, error } = useFetchTasks();
  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }

  if (error) {
    console.log(error);
    return <p style={{ marginTop: "1rem" }}>{error.message}</p>;
  }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
