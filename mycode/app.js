/*  const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "From React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: child }, "i m h1 tag")
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
