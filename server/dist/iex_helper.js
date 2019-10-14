"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
function make_IEX_API_call(url) {
    var options = {
        method: 'GET',
        url: url,
    };
    return new Promise((resolve, reject) => {
        request_1.default(options, (error, response, body) => {
            if (error)
                reject(error);
            resolve(body);
        });
    });
}
exports.default = {
    make_IEX_API_call
};
//# sourceMappingURL=iex_helper.js.map