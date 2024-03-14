import Table from "react-bootstrap/Table";
import TodoItem from "./TodoItem";

function TodoList() {
  const todo = [
    {
      name: "Shoping",
      desc: "Go to the mall and get new shoes",
    },
    {
      name: "Cooking",
      desc: "Cook Food for the lunch",
    },
    {
      name: "Excercise",
      desc: "Go to gym and do excercise",
    },
    {
      name: "Excercise",
      desc: "Go to gym and do excercise",
    },
  ];
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>S.NO</th>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todo.map((value, index) => {
          return <TodoItem v={value} i={index} />;
        })}
      </tbody>
    </Table>
  );
}

export default TodoList;
