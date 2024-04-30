"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./email.scss");
const emailjs_com_1 = __importDefault(require("emailjs-com"));
const react_1 = require("react");
const react_2 = __importStar(require("@tsparticles/react"));
const basic_1 = require("@tsparticles/basic");
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
    const [init, setInit] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        (0, react_2.initParticlesEngine)((engine) => __awaiter(this, void 0, void 0, function* () {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            //await loadSlim(engine);
            yield (0, basic_1.loadBasic)(engine);
        })).then(() => {
            setInit(true);
        });
    }, []);
    const particlesLoaded = (container) => __awaiter(this, void 0, void 0, function* () {
        console.log(container);
    });
    const options = {
        key: "collisionsBounce",
        name: "Collisions Bounce",
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                },
            },
            collisions: {
                enable: true,
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.5,
            },
            size: {
                value: {
                    min: 10,
                    max: 15,
                },
            },
            links: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 10,
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: false,
                    mode: "repulse",
                    parallax: {
                        enable: false,
                        force: 60,
                        smooth: 10,
                    },
                },
                onClick: {
                    enable: true,
                    mode: "push",
                },
            },
            modes: {
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 0.8,
                },
                repulse: {
                    distance: 200,
                },
                push: {
                    quantity: 4,
                },
                remove: {
                    quantity: 2,
                },
            },
        },
        background: {
            color: "#0d47a1",
        },
    };
    if (init) {
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "email" }, { children: [(0, jsx_runtime_1.jsx)(react_2.default, { id: "tsparticles", particlesLoaded: particlesLoaded, options: options }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "card email-form" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-body" }, { children: [(0, jsx_runtime_1.jsx)("h5", Object.assign({ className: "card-title" }, { children: "Send a Message:" })), (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "name" }, { children: "Name: " })), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "name", name: "name", required: true }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "email" }, { children: "Email: " })), (0, jsx_runtime_1.jsx)("input", { type: "email", id: "email", name: "email", required: true }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "message" }, { children: "Message: " })), (0, jsx_runtime_1.jsx)("textarea", { id: "message", name: "message", rows: 4, required: true }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { className: "btn btn-primary", type: "submit", value: "Send" })] })), showConfirmation && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "confirmation-popup" }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "Thank you for your message! I'll get back to you soon." }), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "btn btn-success", onClick: handleConfirmationClose }, { children: "Close" }))] })))] })) }))] })));
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
}
exports.default = Email;
