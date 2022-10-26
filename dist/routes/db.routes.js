"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_controller_1 = require("../controllers/db.controller");
const DB_Router = (0, express_1.Router)();
DB_Router.route("/")
    .get(db_controller_1.getTitle)
    .post(db_controller_1.getSave);
DB_Router.route("/:pk")
    .get(db_controller_1.getData)
    .delete(db_controller_1.getDelete)
    .put(db_controller_1.getUpdate);
exports.default = DB_Router;
