import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store/to-do";
import { useState } from "react";

import "./todo.styles.scss";
import TodoItem from "./TodoItem";
import Button from "../ui/Button";

const ToDo = () => {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);
  const done = useSelector((state) => state.todo.done);

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
    reset();
  };

  const reset = () => {
    setHeader("");
    setContent("");
  }

  const moveTodoHandler = (data) => {
    console.log(data);
    dispatch(todoActions.moveToDone(data));
  };

  return (
    <div className={"todo"}>
      <h1>TODO</h1>
      <form onSubmit={submitTodo}>
        <div className="todo-control">
          <label htmlFor="header">Header</label>
          <input type="text" name="header" onChange={headerHandler} value={header} />
        </div>
        <div className="todo-control">
          <label htmlFor="content">Content</label>
          <textarea type="text" name="content" onChange={contentHandler} value={content} />
        </div>
        <Button>Add TODO</Button>
      </form>
      <section className="main-ul">
        <div className="main-ul__control">
          <h3>TODO</h3>
          <ul>
            {todo.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                header={todo.header}
                content={todo.content}
                moveTodo={moveTodoHandler}
                done={false}
              />
            ))}
          </ul>
        </div>
        <div className="main-ul__control">
          <h3>DONE</h3>
          <ul>
            {done.map((done) => (
              <TodoItem
                key={done.id}
                id={done.id}
                header={done.header}
                content={done.content}
                done={true}
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ToDo;
