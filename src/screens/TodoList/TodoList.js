import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-native-elements";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => {
  console.log("Todos?", todos);
  return (
    <Card>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
      ))}
    </Card>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
