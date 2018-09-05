import { Component } from '@angular/core';
import { AlertsService } from './services/alerts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public Title: string = 'Simple Blog';

  constructor(public alertsService: AlertsService) { }
}
