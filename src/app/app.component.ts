import { Component, OnInit } from '@angular/core';
import { AlertsService } from './services/alerts.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public Title: string = 'Simple Blog';

  constructor(public alertsService: AlertsService, private title: Title) {
  }
}
