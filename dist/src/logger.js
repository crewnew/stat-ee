"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uncaughtErrorLogger = exports.httpLogger = exports.logger = exports.LOG_LEVEL = void 0;
const express_winston_1 = __importDefault(require("express-winston"));
const winston_1 = __importDefault(require("winston"));
exports.LOG_LEVEL = process.env.AUTH_LOG_LEVEL || 'info';
// * Create a common Winston logger that can be used in both middlewares and manually
exports.logger = winston_1.default.createLogger({
    transports: [new winston_1.default.transports.Console({ level: exports.LOG_LEVEL })],
    format: winston_1.default.format.combine(winston_1.default.format.json()),
});
// * Give more importance to Unauthorized and Forbidden status codes to give more visibility to hacking attempts
const SUSPICIOUS_REQUEST_CODES = [401, 403];
const maskUrl = (url) => {
    const { pathname, searchParams, hash } = new URL(url, 'http://noop');
    const queryParameters = Array.from(searchParams.keys());
    if (queryParameters.length > 0) {
        return `${pathname}?${queryParameters
            .map((param) => `${param}=*****`)
            .join('&')}`;
    }
    if (hash) {
        return `${pathname}#*****`;
    }
    return pathname;
};
const maskHeaders = (headers) => {
    if (exports.LOG_LEVEL === 'DEBUG') {
        return headers;
    }
    return Object.keys(headers).reduce((returnableHeaders, key) => (Object.assign(Object.assign({}, returnableHeaders), { [key]: '*****' })), {});
};
const loggerOptions = {
    winstonInstance: exports.logger,
    // * Put meta fields at the root of the logged object
    metaField: null,
    responseField: null,
    msg: (req, res) => `${req.method} ${maskUrl(req.url)} ${res.statusCode} ${
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res.responseTime}ms`,
    // * Always log status, method, url, and userId when it exists
    dynamicMeta: ({ method, url, headers }, res) => {
        const { responseTime, statusCode, body } = res;
        const meta = {
            statusCode,
            method,
            latencyInNs: responseTime * 1e6,
        };
        if (statusCode >= 400) {
            meta.reason = body;
        }
        if (exports.LOG_LEVEL === 'debug') {
            meta.url = url;
            meta.headers = headers;
        }
        else {
            meta.url = maskUrl(url);
            meta.headers = maskHeaders(headers);
        }
        return meta;
    },
    // * Flag /healthz and /change-env as debug, and everything else as info
    level: (req, res) => {
        if (['/healthz'].includes(req.path))
            return 'debug';
        if (SUSPICIOUS_REQUEST_CODES.includes(res.statusCode)) {
            return 'warn';
        }
        if (res.statusCode >= 500) {
            return 'error';
        }
        return 'info';
    },
    requestWhitelist: [],
    responseWhitelist: ['responseTime', 'body'],
};
/**
 * Logger for non 5xx, non suspicious requests e.g. 200, 204, 400...
 * - Requests are logged as info, expect for /healthz et and /change-env which are logged as debug
 * - No additional meta is logged
 * */
exports.httpLogger = express_winston_1.default.logger(loggerOptions);
exports.uncaughtErrorLogger = express_winston_1.default.errorLogger(loggerOptions);
