import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
const items = [
  {
    title: "What is React?",
    content: "React is a front-end javaScript framework",
  },
  {
    title: "Why use React?",
    content: "React is favorite library among engineers",
  },
  {
    title: "how to use react?",
    content: "You use react by creating components",
  },
];
const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "The color blue",
    value: "blue",
  },
];

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Dropdown options={options} />
    </div>
  );
};
