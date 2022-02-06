import minimist from 'minimist';
import * as Coin from "./modules/coin.mjs";
const args = (process.argv.slice(2)) || 0;
let number = String(args).substring(9, 11);
const coinArray = [];
for (let i = 0; i < number; i++) {
    coinArray[i] = Coin.coinFlip();
}
console.log(coinArray);
console.log(Coin.countFlips(coinArray));