'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function() {
              return m[k];
            }
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function(o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function(o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var imgProcess_1 = __importDefault(require('./api/imgProcess'));
var fs = __importStar(require('fs'));
var routes = express_1.default.Router();
//main route & endpoint
routes.get('/', function(req, res) {
  var userData = {
    filename: req.query.filename,
    height: req.query.height,
    width: req.query.width
  };
  var tempDir = './temp/'
    .concat(userData.filename, '_resized_')
    .concat(userData.height, 'X')
    .concat(userData.width, '.jpg');
  if (
    userData.filename === '' ||
    userData.height === '' ||
    userData.width === ''
  ) {
    //error message
    res.write('<h1>error!<br> <h3>please enter the correct values<h3>');
  }
  //caching
  if (fs.existsSync(tempDir)) {
    res.sendFile(
      ''
        .concat(userData.filename, '_resized_')
        .concat(userData.height, 'X')
        .concat(userData.width, '.jpg'),
      { root: 'temp' }
    );
  } else {
    (0, imgProcess_1.default)(
      userData.filename,
      userData.width,
      userData.height
    );
    setTimeout(function() {
      res.sendFile(
        ''
          .concat(userData.filename, '_resized_')
          .concat(userData.height, 'X')
          .concat(userData.width, '.jpg'),
        { root: 'temp' }
      );
    }, 200);
  }
});
exports.default = routes;
