import * as Coin from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
args['number']
const number = args.number;
//console.log(number);
const coinArray = [];
if (number == null) {
    let result = Coin.coinFlips(1);
    console.log(result);
    if (result == [ 'tails' ]) {
        console.log("{ tails: 1 }");
    } else {
        console.log("{ heads: 1 }");
    }
} else {
    for (let i = 0; i < number; i++) {
      coinArray[i] = Coin.coinFlip();
    }
    console.log(coinArray);
    console.log(Coin.countFlips(coinArray));
}

