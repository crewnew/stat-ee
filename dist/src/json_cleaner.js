"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cleanifyJson(json) {
    return JSON.parse(JSON.stringify(json).replace(/"NA"/g, "0"));
}
exports.default = cleanifyJson;
