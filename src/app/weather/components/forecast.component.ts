import { Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs';
import { ForecastService } from '../services/forecast.service';
import IForecast from '../interfaces/IForecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecast$ = new Observable<IForecast[]>();
  constructor(private service: ForecastService) {
    this.forecast$ = this.service.getForecast();
  }
  ngOnInit(): void {
  }
}