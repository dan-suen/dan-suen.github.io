"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./email.scss");
const emailjs_com_1 = __importDefault(require("emailjs-com"));
const react_1 = require("react");
function Email() {
    const [showConfirmation, setShowConfirmation] = (0, react_1.useState)(false);
    const sendEmail = (formData) => {
        const { name, email, message } = Object.fromEntries(formData);
        emailjs_com_1.default
            .send("service_ogmpcx9", "template_tamc4qh", {
            from_name: name,
            message: message,
            reply_to: email,
        }, "VVPJxWc4NaNP5MZQH")
            .then((response) => {
            console.log("Email sent:", response);
        })
            .catch((error) => {
            console.error("Error sending email:", error);
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        sendEmail(formData);
        setShowConfirmation(true);
        event.currentTarget.reset();
    };
    const handleConfirmationClose = () => {
        setShowConfirmation(false);
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "email" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "card email-form" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-body" }, { children: [(0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("h5", Object.assign({ className: "card-title btn btn-info" }, { children: "Send a Message:" })), (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "name", className: "form-label" }, { children: "Name: " })), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "name", name: "name", className: "form-control", required: true }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "email", className: "form-label" }, { children: "Email: " })), (0, jsx_runtime_1.jsx)("input", { type: "email", id: "email", name: "email", className: "form-control", required: true }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "message" }, { children: "Message: " })), (0, jsx_runtime_1.jsx)("textarea", { id: "message", name: "message", rows: 4, required: true }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { className: "btn btn-primary form-control", id: "send", type: "submit", value: "Send" })] })), showConfirmation && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "confirmation-popup" }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "Thank you for your message! I'll get back to you soon." }), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "btn btn-success", onClick: handleConfirmationClose }, { children: "Close" }))] })))] })) })) })));
}
exports.default = Email;
