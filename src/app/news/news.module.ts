import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './components/news-list/news-list.component';
import { TrimOutletNamePipe } from './pipes/trim-outlet-name.pipe';

@NgModule({
  declarations: [NewsListComponent, TrimOutletNamePipe],
  imports: [
    CommonModule
  ],
  exports: [
    NewsListComponent
  ]
})
export class NewsModule { }
