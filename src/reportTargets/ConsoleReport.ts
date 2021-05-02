import { OutputTarget } from '../Summary';

// check class to implement interface
export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
