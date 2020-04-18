import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map, switchMap, pluck, tap } from 'rxjs/operators';
import { NotificationService } from '../../notification/services/notification.service';
import IArticle from '../interfaces/IArticle';
import IResponse from '../interfaces/IResponse';
import PaginationCalculator from '../helpers/PaginationCalculator';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private articleInput: Subject<number>;
  articleOutput: Observable<IArticle[]>;
  paginationOutput: Subject<number>;
  private country: string = 'us';
  private key: string = '8992efc8ee1e47c8a8bddce639c20ccf';
  private pageSize: number = 10;
  private url: string = "https://newsapi.org/v2/top-headlines";
  constructor(
    private client: HttpClient,
    private notification: NotificationService) {
      this.paginationOutput = new Subject<number>();
      this.articleInput = new Subject<number>();
      this.articleOutput = this.articleInput.pipe(
        map((page) => {
          return new HttpParams()
            .set('country', this.country)
            .set('apiKey', this.key)
            .set('pageSize', String(this.pageSize))
            .set('page', String(page))
        }),
        switchMap((params) => {
          return this.client.get<IResponse>(this.url, { params });
        }),
        tap(response => {
          this.paginationOutput.next(
            PaginationCalculator.Pages(this.pageSize, response.totalResults));
        }),
        pluck('articles')
      );
    }
    getPage(page: number): void {
      this.articleInput.next(page);
    }
}