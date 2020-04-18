import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import IArticle from '../../interfaces/IArticle';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  articles: IArticle[];
  constructor(private service: NewsService) { 
    this.service.articleOutput.subscribe((articles) => {
      this.articles = articles;
      console.log(this.articles);
    })
  }
  ngOnInit(): void {
    this.service.getPage(1);
  }
}
