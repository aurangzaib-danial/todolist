"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List = /** @class */ (function () {
    function List() {
        this._items = [];
    }
    Object.defineProperty(List.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    List.prototype.add = function (item) {
        this._items.push(item);
    };
    List.prototype.isEmpty = function () {
        return this._items.length === 0;
    };
    List.prototype.edit = function (id, description) {
        this._items[id] = description;
    };
    List.prototype.remove = function (id) {
        this._items.splice(id, 1);
    };
    return List;
}());
exports.default = List;
