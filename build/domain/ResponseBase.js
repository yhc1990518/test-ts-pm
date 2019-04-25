"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseBase {
    constructor(data, code) {
        this._code = code;
        this._data = data;
    }
    get code() {
        return this._code;
    }
    get message() {
        return this._message;
    }
    set message(message) {
        this._message = message;
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
}
exports.ResponseBase = ResponseBase;
