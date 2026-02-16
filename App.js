import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const title = (
    <h2>
        This is Title
    </h2>
);


// React Component
const Parent = () => (
    <h1 className="heading" tabIndex="1">
        This is Parent heading
    </h1>
);

// Component Composition
const Child = () => (
    <div id="container">
        {title}
        <Parent />
        <h1>This is Child Heading</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Child />);