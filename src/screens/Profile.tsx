import React from "react";
import { View, Text } from "react-native";
import { User } from "../lib/types/User";

type Props = {
  user: User;
};

const Profile: React.FC<Props> = props => {
  return (
    <View>
      <Text>Hello!</Text>
    </View>
  );
};

export default Profile;
