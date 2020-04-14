import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  constructor(private service: ForecastService) { 
    this.service.getForecast().subscribe((weather) => {
      console.log(weather);
    });
  }
  ngOnInit(): void {
  }
}