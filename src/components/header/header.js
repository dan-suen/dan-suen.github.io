"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./header.scss");
const me_jpg_1 = __importDefault(require("./me.jpg"));
function Header() {
    return ((0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("img", { src: me_jpg_1.default, className: "img-fluid", alt: "Daniel Suen" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["My Name is ", (0, jsx_runtime_1.jsx)("b", { children: "Daniel Suen" }), "."] }), (0, jsx_runtime_1.jsx)("h2", { children: "Welcome to my page!" })] })] }));
}
exports.default = Header;
