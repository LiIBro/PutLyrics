import App from "../src/App";
const react = Spicetify.React;

const mountPoint = document.createElement("div");
document.body.appendChild(mountPoint);

Spicetify.ReactDOM.render(react.createElement(App), mountPoint);
