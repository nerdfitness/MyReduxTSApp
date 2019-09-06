/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import { Provider } from "react-redux";
import store from "./lib/store/store";
import Profile from "./screens/Profile";
import ToDoScreen from "./screens/ToDoScreen";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <Text>Dope</Text>
            </View>
            <ToDoScreen />
            <Profile />
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    </Provider>
  );
};

export default App;
