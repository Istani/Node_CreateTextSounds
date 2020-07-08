process.chdir(__dirname);
const package_info = require("./package.json");
var software = package_info.name + " (V " + package_info.version + ")";
console.log(software);
console.log("=".repeat(software.length));

const say = require("say");

say.export("1 Euro und 10 Cent", null, 1, "tmp/110e.wav");
say.export("25", null, 1, "tmp/25.wav");
