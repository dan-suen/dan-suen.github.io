"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./resume.scss");
const me_jpg_1 = __importDefault(require("./me.jpg"));
function Resume() {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "resume" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: " Hello! \uD83D\uDC4B" }), (0, jsx_runtime_1.jsx)("img", { src: me_jpg_1.default, className: "img-fluid", alt: "Daniel Suen" }), (0, jsx_runtime_1.jsx)("h3", { children: "I'm Dan." }), (0, jsx_runtime_1.jsx)("p", { children: "I'm a recent graduate from the Lighthouse Labs Full-stack Web Development bootcamp, and former STEM undergraduate from the University of Toronto. I love to learn and tinker with new technologies." }), (0, jsx_runtime_1.jsx)("p", { children: "After all, the most satisfying thing with using technology is the little details. Because it shows there's a human who cares on the other side. My favourite anecdote goes like this:" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)("strong", { children: "When you play modern video games, there is usually a button to skip text and cutscenes. You don't buy the game because it has a skip button and you might not even notice it. But when you boot up that older game from the 90's, you're going to wish you had a skip button." }) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("p", { children: "I love features that work. That might mean coming up with good ideas to implement but it also means testing and breaking and trying to understand." }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("p", { children: "\uD83D\uDD2D I\u2019m currently working on my resume, improving my LinkedIn profile and looking for a position as a software developer." }), (0, jsx_runtime_1.jsx)("p", { children: "\uD83D\uDC6F I\u2019m looking to collaborate on anything level-appropriate, especially if it's an opportunity with Vue or Typescript." }), (0, jsx_runtime_1.jsxs)("p", { children: ["\u26A1 Fun fact:", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)("em", { children: ["log", (0, jsx_runtime_1.jsx)("sub", { children: "2" }), "(n) = \u03B8 (log", (0, jsx_runtime_1.jsx)("sub", { children: "8" }), "(n))"] }), " ", "and", " ", (0, jsx_runtime_1.jsxs)("em", { children: ["log", (0, jsx_runtime_1.jsx)("sub", { children: "8" }), "(n) = \u03B8 (log", (0, jsx_runtime_1.jsx)("sub", { children: "2" }), "(n))"] }), (0, jsx_runtime_1.jsx)("br", {})] }), (0, jsx_runtime_1.jsx)("p", { children: "Those who know, know." }), (0, jsx_runtime_1.jsx)("br", {})] })));
}
exports.default = Resume;
