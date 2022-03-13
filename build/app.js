'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express')); //setting up the server and importing my modules & routes
var index_1 = __importDefault(require('./routes/index'));
var app = (0, express_1.default)();
var port = 3000;
app.listen(port, function() {
  console.log(
    'server started at http://localhost:'.concat(
      port,
      '/?filename=&width=500&height=500'
    )
  );
});
app.use('/', index_1.default); //using my main route through my app
exports.default = app;
