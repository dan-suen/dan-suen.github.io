"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./footer.scss");
const divStyle = {
    width: "100%",
};
function Footer() {
    return ((0, jsx_runtime_1.jsx)("footer", { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "card", style: divStyle }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-body" }, { children: [(0, jsx_runtime_1.jsx)("h5", Object.assign({ className: "card-title" }, { children: "How to reach me:" })), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "https://www.linkedin.com/in/daniel-suen-5182b6149/" }, { children: (0, jsx_runtime_1.jsx)("img", { src: "https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" }) })), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "https://github.com/dan-suen" }, { children: (0, jsx_runtime_1.jsx)("img", { src: "https://img.shields.io/badge/-GitHub-FFFFFF?style=for-the-badge&logo=github&logoColor=black" }) })), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "mailto: danielsuen200791357@gmail.com" }, { children: (0, jsx_runtime_1.jsx)("img", { src: "https://img.shields.io/badge/-Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" }) })), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "tel:+4168048855" }, { children: (0, jsx_runtime_1.jsx)("img", { src: "https://img.shields.io/badge/-416_804_8855-000000?style=for-the-badge" }) }))] })) })) }));
}
exports.default = Footer;
