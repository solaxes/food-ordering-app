import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return <h2>My First component</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
