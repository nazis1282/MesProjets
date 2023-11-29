import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
})
export class LoggingComponent implements OnInit {
  latestLogMessage: string = '';
  isLatestLogVisible: boolean = false;

  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
    this.latestLogMessage = this.loggingService.getLatestLogMessage();
    this.isLatestLogVisible = true;
    setTimeout(() => {
      this.isLatestLogVisible = false;
    }, 1000);
  }
}
