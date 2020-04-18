import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NewsListComponent } from './components/news-list/news-list.component';
import { TrimOutletNamePipe } from './pipes/trim-outlet-name.pipe';

@NgModule({
  declarations: [NewsListComponent, TrimOutletNamePipe],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NewsListComponent
  ]
})
export class NewsModule { }
