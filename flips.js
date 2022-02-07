import * as Coin from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
args["number"]
const number = args.number || 1;
//let number = String(args).substring(9, 11);
const coinArray = [];
for (let i = 0; i < number; i++) {
    coinArray[i] = Coin.coinFlip();
}
console.log(coinArray);
console.log(Coin.countFlips(coinArray));