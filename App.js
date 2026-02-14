import React from "react";
import ReactDOM from "react-dom/client";

// React Element - JS object - HTMLElement(render)
//const parent = React.createElement("h1", {id: "heading"}, "This is h1 tag");

// JSX (Transpiled before it reaches the JS) - parcel - babel
// JSX - Babel transpiles to React Element - JS object - HTMLElement(render)
const parent = (
    <h1 className="heading" tabIndex="1">
        This is JSX heading
    </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);