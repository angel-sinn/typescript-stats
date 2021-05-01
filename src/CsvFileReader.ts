import fs from 'fs';

// mark class as abstract; for reusability, use generic <T> for data type
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  // mark method as abstract
  abstract mapRow(row: string[]): T;

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
