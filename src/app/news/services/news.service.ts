import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, filter, map, mergeMap, pluck, retry, share, switchMap, tap, toArray } from 'rxjs/operators';
import { NotificationService } from '../../notification/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private country: string = 'us';
  private key: string = '8992efc8ee1e47c8a8bddce639c20ccf';
  private pageSize: number = 10;
  private url: string = "https://newsapi.org/v2/top-headlines";
  constructor(
    private client: HttpClient,
    private notification: NotificationService) {
  }
}