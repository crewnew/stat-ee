"use strict";
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
exports.sendUnspecifiedError = exports.serverErrors = exports.sendError = exports.ERRORS = exports.REQUEST_VALIDATION_ERROR = void 0;
const http_status_codes_1 = require("http-status-codes");
exports.REQUEST_VALIDATION_ERROR = {
    status: http_status_codes_1.StatusCodes.BAD_REQUEST,
    error: 'invalid-request',
    message: 'The request payload is incorrect',
};
const asErrors = (et) => et;
exports.ERRORS = asErrors({
    'bad-request': {
        status: http_status_codes_1.StatusCodes.BAD_REQUEST,
        message: 'Bad Request',
    },
    'route-not-found': {
        status: http_status_codes_1.StatusCodes.NOT_FOUND,
        message: 'Route not found',
    },
    'disabled-endpoint': {
        status: http_status_codes_1.StatusCodes.CONFLICT,
        message: 'This endpoint is disabled',
    },
    'invalid-request': {
        status: http_status_codes_1.StatusCodes.BAD_REQUEST,
        message: 'The request payload is incorrect',
    },
    'invalid-expiry-date': {
        status: http_status_codes_1.StatusCodes.BAD_REQUEST,
        message: 'The expiry date must be greater than the current date',
    },
    'disabled-mfa-totp': {
        status: http_status_codes_1.StatusCodes.BAD_REQUEST,
        message: 'MFA TOTP is not enabled for this user',
    },
    'no-totp-secret': {
        status: http_status_codes_1.StatusCodes.BAD_REQUEST,
        message: 'OTP secret is not set for user',
    },
    'disabled-user': {
        status: http_status_codes_1.StatusCodes.UNAUTHORIZED,
        message: 'User is disabled',
        sensitive: true,
    },
    'invalid-email-password': {
        status: http_status_codes_1.StatusCodes.UNAUTHORIZED,
        message: 'Incorrect email or password',
        sensitive: true,
    },
    'invalid-otp': {
        status: http_status_codes_1.StatusCodes.UNAUTHORIZED,
        message: 'Invalid or expired OTP',
    },
    'invalid-ticket': {
        status: http_status_codes_1.StatusCodes.UNAUTHORIZED,
        message: 'Invalid or expired verification ticket',
    },
    'invalid-webauthn-security-key': {
        status: http_status_codes_1.StatusCodes.UNAUTHORIZED,
        message: 'Invalid WebAuthn security key',
    },
    'invalid-webauthn-verification': {
        status: http_status_codes_1.StatusCodes.UNAUTHORIZED,
        message: 'Invalid WebAuthn verification',
    },
    'unverified-user': {
        status: http_status_codes_1.StatusCodes.UNAUTHORIZED,
        message: 'Email is not verified',
    },
    'email-already-in-use': {
        status: http_status_codes_1.StatusCodes.CONFLICT,
        message: 'Email already in use',
        sensitive: true,
    },
    'mfa-type-not-found': {
        status: http_status_codes_1.StatusCodes.BAD_REQUEST,
        message: 'There is no active MFA set for the user',
    },
    'email-already-verified': {
        status: http_status_codes_1.StatusCodes.BAD_REQUEST,
        message: "User's email is already verified",
        sensitive: true,
    },
    'totp-already-active': {
        status: http_status_codes_1.StatusCodes.BAD_REQUEST,
        message: 'TOTP MFA already active',
    },
    'user-not-found': {
        status: http_status_codes_1.StatusCodes.BAD_REQUEST,
        message: 'No user found',
        sensitive: true,
    },
    'user-not-anonymous': {
        status: http_status_codes_1.StatusCodes.BAD_REQUEST,
        message: 'Logged in user is not anonymous',
    },
    'forbidden': {
        status: http_status_codes_1.StatusCodes.FORBIDDEN,
        message: 'Forbidden',
    },
    'forbidden-anonymous': {
        status: http_status_codes_1.StatusCodes.FORBIDDEN,
        message: 'Anonymous users cannot access this endpoint',
    },
    'invalid-refresh-token': {
        status: http_status_codes_1.StatusCodes.UNAUTHORIZED,
        message: 'Invalid or expired refresh token',
    },
    'invalid-pat': {
        status: http_status_codes_1.StatusCodes.UNAUTHORIZED,
        message: 'Invalid or expired personal access token',
    },
    'invalid-admin-secret': {
        status: http_status_codes_1.StatusCodes.UNAUTHORIZED,
        message: 'Invalid admin secret',
    },
    'unauthenticated-user': {
        status: http_status_codes_1.StatusCodes.UNAUTHORIZED,
        message: 'User is not logged in',
    },
    'elevated-claim-required': {
        status: http_status_codes_1.StatusCodes.FORBIDDEN,
        message: 'Elevated claim is required',
    },
    'forbidden-endpoint-in-production': {
        status: http_status_codes_1.StatusCodes.BAD_REQUEST,
        message: 'This endpoint is only available on test environments',
    },
    'invalid-sign-in-method': {
        status: http_status_codes_1.StatusCodes.BAD_REQUEST,
        message: 'Incorrect sign in method',
    },
    'cannot-send-sms': {
        status: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        message: 'Error sending SMS',
    },
    'internal-error': {
        status: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        message: 'Internal server error',
    },
    'invalid-oauth-configuration': {
        status: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        message: 'Invalid OAuth configuration',
    },
    'signup-disabled': {
        status: http_status_codes_1.StatusCodes.FORBIDDEN,
        message: 'Sign up is disabled.',
    },
});
const sendError = (res, code, { customMessage, redirectTo, } = {}, forwardRedirection) => {
    const error = exports.ERRORS[code];
    const message = customMessage !== null && customMessage !== void 0 ? customMessage : error.message;
    const status = error.status;
    return res.status(status).send({ status, message, error: error });
};
exports.sendError = sendError;
/**
 * This is a custom error middleware for Express.
 * https://expressjs.com/en/guide/error-handling.html
 */
function serverErrors(error, _req, res, 
// * See: https://stackoverflow.com/a/61464426
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_next) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, exports.sendError)(res, 'internal-error', {
            customMessage: JSON.stringify({
                message: error.message || 'An unknown error occurred',
                stack: error.stack,
            }),
        });
    });
}
exports.serverErrors = serverErrors;
const sendUnspecifiedError = (res, e) => {
    const error = e;
    if (error.message in exports.ERRORS) {
        return (0, exports.sendError)(res, error.message);
    }
    else {
        return (0, exports.sendError)(res, 'internal-error', {
            customMessage: JSON.stringify({
                message: error.message || 'An unknown error occurred',
                stack: error.stack,
            }),
        });
    }
};
exports.sendUnspecifiedError = sendUnspecifiedError;
