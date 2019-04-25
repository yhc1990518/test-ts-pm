"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdResponse {
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get desc() {
        return this._desc;
    }
    set desc(desc) {
        this._desc = desc;
    }
    get images() {
        return this._images;
    }
    set images(images) {
        this._images = images;
    }
}
exports.AdResponse = AdResponse;
