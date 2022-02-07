import * as Coin from "./modules/coin.mjs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const args = require("minimist")(process.argv.slice(2));
args["call"];
const call = args.call || "";
if (call === "") {
    console.log("Error: no input.");
} else {
    console.log(Coin.flipACoin(call));
}

