
import './TodoItem.styles.scss';

const TodoItem = ({header, content, moveTodo, id, done}) => {

const onMoveToHandler = () => {
  moveTodo(id);
}

  return (
    <li className="todo-li" key={id} id={id}>
      <h3>{header}</h3>
      <p>{content}</p>
      {!done && <button onClick={onMoveToHandler}>Move to done</button>}
    </li>
  )
}

export default TodoItem;