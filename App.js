const parent=React.createElement("div",{id:'parent'},
          [React.createElement("div",{id:'child'},
          [React.createElement("h1",{},"I am H1 tag"),
          React.createElement("h2",{},"I am H11 tag")]
          ),
          React.createElement("div",{id:'child2'},
          [React.createElement("h1",{},"I am H1 tag"),
          React.createElement("h2",{},"I am H11 tag")]
          )])

const heading=React.createElement("h1",{id:"heading"},"hellow react")
console.log(parent)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)