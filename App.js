import React from "react";
import ReactDOM from "react-dom/client";

//React Component
const Parent = () => (
    <h1 className="heading" tabIndex="1">
        This is Parent heading
    </h1>
);

const Child = () => (
    <div id="container">
        <Parent />
        <h1>This is Child Heading</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Child />);