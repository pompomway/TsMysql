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
exports.getData = exports.getUpdate = exports.getDelete = exports.getSave = exports.getTitle = void 0;
const database_1 = require("../database");
function getTitle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //const conn=await connect();
        //const rs=await conn.query("select id,pass from login where pk=1");
        return res.json("DB API");
    });
}
exports.getTitle = getTitle;
function getSave(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const pn = req.query;
        const conn = yield (0, database_1.connect)();
        yield conn.query("insert into login set ?", [pn]);
        //const conn=await connect();
        return res.json("Insert OK!");
    });
}
exports.getSave = getSave;
function getDelete(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let pk = +req.params["pk"];
        try {
            const conn = yield (0, database_1.connect)();
            yield conn.query("delete from login where pk=?", [pk]);
            return res.json("Delete OK!");
        }
        catch (error) {
            console.log(error);
        }
        return res.json("Delete NG!Check Your Pk!");
    });
}
exports.getDelete = getDelete;
function getUpdate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let pn = req.query;
        let pk = +req.params["pk"];
        console.log(pn);
        console.log(pk);
        try {
            const conn = yield (0, database_1.connect)();
            yield conn.query("update login set ? where pk=?", [pn, pk]);
            return res.json("Update OK!");
        }
        catch (error) {
            console.log(error);
        }
        return res.json("Update NG!");
    });
}
exports.getUpdate = getUpdate;
function getData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let pk = +req.params["pk"];
        try {
            const conn = yield (0, database_1.connect)();
            const rs = yield conn.query("select id,pass from login where pk=?", [pk]);
            return res.json(rs[0]);
        }
        catch (error) {
            console.log(error);
        }
        return res.json("getData");
    });
}
exports.getData = getData;
