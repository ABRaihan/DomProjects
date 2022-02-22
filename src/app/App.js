import Home from "../pages/Home.js";

const App = () => {
    return [
        Home()
    ]
}
document.getElementById("root").append(...App());