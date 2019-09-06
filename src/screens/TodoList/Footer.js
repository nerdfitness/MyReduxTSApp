import React from "react";
import FilterLink from "./Containers/FilterLink";
import { View, Text } from "react-native";
import { VisibilityFilters } from "../../lib/actions/actions";

const Footer = () => (
  <View>
    <Text>
      Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>{" "}
      {", "}
    </Text>
    <Text>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      {", "}
    </Text>
    <Text>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </Text>
  </View>
);

export default Footer;
