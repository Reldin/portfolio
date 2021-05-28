import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store/to-do";
import { useState } from "react";

const ToDo = () => {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);

  const headerHandler = (event) => {
    setHeader(event.target.value);
  };

  const contentHandler = (event) => {
    setContent(event.target.value);
  };

  const submitTodo = (event) => {
    event.preventDefault();

    if (header === "" || content === "") {
      return;
    }

    dispatch(
      todoActions.addTodo({
        id: Math.random() * 10,
        header: header,
        content: content,
      })
    );
  };

  return (
    <div>
      <h1>TODO</h1>
      <form onSubmit={submitTodo}>
        <input type="text" name="header" onChange={headerHandler} />
        <input type="text" name="content" onChange={contentHandler} />
        <button>Add TODO</button>
      </form>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id} id={todo.id}>
            <h3>{todo.header}</h3>
            <p>{todo.content}</p>
          </li>
        ))}
      </ul>
      <ul></ul>
    </div>
  );
};

export default ToDo;
