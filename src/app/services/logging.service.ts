import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  private latestLogMessage: string = '';

  log(message: string): void {
    this.latestLogMessage = message;
  }

  getLatestLogMessage(): string {
    return this.latestLogMessage;
  }
}
