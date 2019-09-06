import React from "react";
import PropTypes from "prop-types";
import { Button, Text } from "react-native-elements";

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <Text>{children}</Text>;
  }

  return <Button onPress={onClick} title={children} />;
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
