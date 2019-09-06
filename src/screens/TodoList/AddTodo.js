import React, { useState } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { addTodo } from "../../lib/actions/actions";
import { Button, Input } from "react-native-elements";

let AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState("");

  return (
    <View>
      <Input
        placeholder="New todo..."
        errorMessage="ERROR"
        value={input}
        onChangeText={t => setInput(t)}
      />
      <Button title="Add Todo" onPress={() => dispatch(addTodo(input))} />
    </View>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
