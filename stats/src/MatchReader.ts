import { CsvFileReader } from './CsvFileReader';
import { matchResult } from './MatchResult';
import { stringToDate } from './utils';

type MatchData = [Date, string, string, number, number, matchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
	mapRow(row: string[]): MatchData {
		return [
			stringToDate(row[0]),
			row[1],
			row[2],
			parseInt(row[3]),
			parseInt(row[4]),
			row[5] as matchResult,
			row[6],
		];
	}
}
