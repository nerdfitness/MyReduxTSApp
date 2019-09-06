import React from "react";
import PropTypes from "prop-types";
import { ListItem, Button } from "react-native-elements";

const Todo = ({ onClick, completed, text }) => {
  console.log("Todo props:", completed, "text?", text);

  return (
    <Button
      onPress={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
      title={text}
    />
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
