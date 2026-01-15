const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Hello World from React!"
);
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(typeof(root)); //object
root.render(heading);