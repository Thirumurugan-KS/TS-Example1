"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const homePage_1 = __importDefault(require("./routes/homePage"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(homePage_1.default);
app.listen(PORT, () => console.log(`Running in ${PORT} ⚡`));
