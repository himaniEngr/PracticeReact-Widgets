import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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

// export default () => {
//   const [selected, setSelected] = useState(options[0]);
//   const [showDropdown, setShowDropdown] = useState(true);
//   return (
//     <div>
//       {/* <Accordion items={items} /> */}
//       <button onClick={() => setShowDropdown(!showDropdown)}>
//         Toggle dropdown
//       </button>
//       {showDropdown ? (
//         <Dropdown
//           label='Select a color'
//           selected={selected}
//           onSelectedChange={setSelected}
//           options={options}
//         />
//       ) : null}
//     </div>
//   );
// };
const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};
const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};
const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown />;
  }
};
const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

export default () => {
  return (
    <div>
      {showAccordion()}
      {showList()}
      {showTranslate()}
      {showDropdown()}
    </div>
  );
};
