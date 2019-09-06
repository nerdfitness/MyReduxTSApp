import React from "react";
import { View, Text } from "react-native";
import { User } from "../lib/types/User";
import AddTodo from "./TodoList/AddTodo";
import VisibleToDoList from "./TodoList/Containers/VisibleTodoList";
import Footer from "./TodoList/Footer";

const ToDoScreen = props => {
  return (
    <View>
      <AddTodo />
      <VisibleToDoList />
      <Footer />
    </View>
  );
};

export default ToDoScreen;
