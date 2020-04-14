import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecast = [];
  constructor(private service: ForecastService) { 
    this.service.getForecast().subscribe((forecast) => {
      this.forecast = forecast;
    });
  }
  ngOnInit(): void {
  }
}