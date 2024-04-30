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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./home.scss");
const react_1 = require("react");
const react_2 = __importStar(require("@tsparticles/react"));
const basic_1 = require("@tsparticles/basic");
function Home() {
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
    const options = (0, react_1.useMemo)(() => ({
        key: "big",
        name: "Big Particles",
        particles: {
            number: {
                value: 30,
            },
            color: {
                value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"],
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: {
                    min: 0.4,
                    max: 0.8,
                },
            },
            size: {
                value: {
                    min: 300,
                    max: 400,
                },
                animation: {
                    enable: true,
                    speed: 100,
                    sync: false,
                },
            },
            move: {
                enable: true,
                speed: 10,
                direction: "top",
            },
        },
        background: {
            color: "#ffffff",
        },
    }), []);
    if (init) {
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "home" }, { children: [(0, jsx_runtime_1.jsx)(react_2.default, { id: "tsparticles", particlesLoaded: particlesLoaded, options: options }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "home-text" }, { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["My Name is ", (0, jsx_runtime_1.jsx)("b", { children: "Daniel Suen" }), "."] }), (0, jsx_runtime_1.jsx)("h2", { children: "Welcome to my page!" })] }))] })));
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
}
exports.default = Home;
