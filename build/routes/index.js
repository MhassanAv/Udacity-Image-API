"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imgProcess_1 = __importDefault(require("./api/imgProcess"));
var fs_1 = __importDefault(require("fs"));
var routes = express_1.default.Router();
//main route & endpoint 
routes.get('/', function (req, res) {
    var userData = {
        filename: req.query.filename,
        height: req.query.height,
        width: req.query.width
    };
    var tempDir = "./temp/".concat(userData.filename, "resized.jpg");
    if (userData.filename == '' || userData.height == '' || userData.width == '') {
        //error message
        res.send("error! please enter the correct values");
    }
    //caching 
    if (fs_1.default.existsSync(tempDir)) {
        res.send("already exists: " + tempDir);
    }
    else {
        res.send("success!");
        (0, imgProcess_1.default)(userData.filename, userData.width, userData.height);
    }
});
exports.default = routes;
