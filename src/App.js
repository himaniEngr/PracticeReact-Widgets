import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
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

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
