import { MatchReader } from "./MatchReader";
import { matchResult } from "./MatchResult";

const reader = new MatchReader('football.csv');

let manWon = 0;

reader.read();
for (let match of reader.data) {
	if (
		(match[1] === 'Man United' && match[5] === matchResult.HomeWin) ||
		(match[2] === 'Man United' && match[5] === matchResult.AwayWin)
	) {
		manWon++;
	}
}

console.log(`Man United won ${manWon} games`);
