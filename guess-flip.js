import * as Coin from "./modules/coin.mjs";

const args = (process.argv.slice(2));
let call = String(args);
if (call === "") {
    console.log("Error: no input.");
} else {
    let actualCall = call.substring(7, 12);
    console.log(Coin.flipACoin(actualCall));
}

