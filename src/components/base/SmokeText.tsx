import * as React from "react";
import smokeString from "@/utils/smokeText";

export default ({ children }) => {
  const [text, setText] = React.useState(smokeString(children));
  return text;
};
