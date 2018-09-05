import { Injectable } from '@angular/core';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  public Alerts: Array<any> = [];

  public Add(alert: any){
    this.Alerts.push(alert);
  }

  public OnClosed(dismissedAlert: AlertComponent){
    this.Alerts = this.Alerts.filter(alert => alert != dismissedAlert);
  }
}
