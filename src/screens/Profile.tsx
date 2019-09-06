import React from "react";
import { View, Text } from "react-native";
import { User } from "../lib/types/User";

type Props = {};

const Profile: React.FC<Props> = props => {
  return (
    <View>
      <Text>Hello!</Text>
      <Text>This is the profile.</Text>
      <Text>
        This is code written in react native, but compiling to both the native
        and web. How freakign cool is that.
      </Text>
    </View>
  );
};

export default Profile;
