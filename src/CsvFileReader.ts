import fs from 'fs';
import { MatchResult } from './MatchResult';

// tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

// mark class as abstract
export abstract class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  // mark method as abstract
  abstract mapRow(row: string[]): MatchData;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
