"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./header.scss");
function Header() {
    return ((0, jsx_runtime_1.jsx)("header", { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["My Name is ", (0, jsx_runtime_1.jsx)("b", { children: "Daniel Suen" }), "."] }), (0, jsx_runtime_1.jsx)("h2", { children: "Welcome to my page!" })] }) }));
}
exports.default = Header;
