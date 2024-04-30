"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./home.scss");
function Home() {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "home" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "home-text" }, { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["My Name is ", (0, jsx_runtime_1.jsx)("b", { children: "Daniel Suen" }), "."] }), (0, jsx_runtime_1.jsx)("h2", { children: "Welcome to my page!" })] })) })));
}
exports.default = Home;
