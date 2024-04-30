"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
require("./App.scss");
const footer_1 = __importDefault(require("./components/footer/footer"));
const home_1 = __importDefault(require("./components/home/home"));
const email_1 = __importDefault(require("./components/email/email"));
const projects_1 = __importDefault(require("./components/projects/projects"));
const resume_1 = __importDefault(require("./components/resume/resume"));
const nav_1 = __importDefault(require("./components/nav/nav"));
const react_router_dom_1 = require("react-router-dom");
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "App" }, { children: [(0, jsx_runtime_1.jsx)(nav_1.default, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "about", element: (0, jsx_runtime_1.jsx)(resume_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "projects", element: (0, jsx_runtime_1.jsx)(projects_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "contact", element: (0, jsx_runtime_1.jsx)(email_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/", replace: true }) })] }), (0, jsx_runtime_1.jsx)("canvas", { className: "background" }), (0, jsx_runtime_1.jsx)("script", { src: "path/to/particles.min.js" }), (0, jsx_runtime_1.jsx)(footer_1.default, {})] })));
}
exports.default = App;
