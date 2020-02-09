process.chdir(__dirname);
const package_info = require("./package.json");
var software = package_info.name + " (V " + package_info.version + ")";
console.log(software);
console.log("=".repeat(software.length));

// WORKS NOT ON LINUX... WHY?
const say = require("say");

say.export("Never gonna give you up.", null, 1, "tmp/Never gonna give you up.wav");

say.export("Was fuer ein geiles Game! Das klingt nach einer Runde Teemo Smite!", null, 1, "tmp/gege.wav");
say.export("Zero Peel!", null, 1, "tmp/peel.wav");
say.export("Party @everyone!", null, 1, "tmp/party.wav");
