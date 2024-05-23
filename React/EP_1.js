{/* <div id = "Parent">
    <div id="child1">
        <h1>heading</h1>
        <h1>heading</h1>
    </div>
    <div id="child1">
        <h1>heading</h1>
        <h1>heading</h1>
    </div>
</div> */}



const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div", {id:"child1"},[
        React.createElement("h1", {id:"heading1"},"This is Heading 1"),
        React.createElement("h2", {id:"heading2"},"This is Heading 2"),
    ]),
    React.createElement("div", {id:"child1"},[
        React.createElement("h1", {id:"heading1"},"This is Heading 1"),
        React.createElement("h2", {id:"heading2"},"This is Heading 2"),
    ])
]);




const heading = React.createElement("h1",{id:"heading1"},"React first Program");
// const heading2 = React.createElement("h1",{},"React first Program");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


