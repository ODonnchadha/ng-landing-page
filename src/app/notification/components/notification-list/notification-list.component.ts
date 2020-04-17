import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import ICommand from '../../interfaces/ICommand';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  messages: Observable<ICommand[]>;

  constructor(private service: NotificationService) {
    this.messages = this.service.output;
  }

  ngOnInit(): void {
  }

  onClick(id: number): void {
    this.service.clearMessage(id);
  }
}