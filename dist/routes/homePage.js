"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeRouter = (0, express_1.Router)();
// define the home page route
homeRouter.get('/', (req, res) => {
    console.log("Hi");
    res.send('Homes page');
});
homeRouter.get('/:name', (req, res) => {
    res.send(req.params.name);
});
exports.default = homeRouter;
