// CommonJS for node
// var obj = require("./utils");

import { log } from "node:console";
import obj from "./utils.js";
import pad from "pad-left";
console.log(obj.cal(30));
console.log(pad("4", 4, 0));
