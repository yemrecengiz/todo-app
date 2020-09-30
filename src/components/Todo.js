import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";
import { Checkbox, ListItem } from "@material-ui/core";

const Todo = ({ todo, toggleTodo }) => (
  <ListItem button divider onClick={() => toggleTodo(todo.id)}>
    
    {todo && todo.completed ? <Checkbox checked/> : <Checkbox/>}{" "}

    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </ListItem>
);

// export default Todo;
export default connect(
  null,
  { toggleTodo }
)(Todo);
