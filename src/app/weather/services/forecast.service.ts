import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { filter, map, mergeMap, pluck, switchMap, toArray } from 'rxjs/operators';
import IOpenWeather from '../interfaces/IOpenWeather';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private url = "https://api.openweathermap.org/data/2.5/forecast";
  constructor(private client: HttpClient) { }
  getForecast() {
    return this.getCurrentLocation().pipe(
      map(coordinates => {
        return new HttpParams()
          .set('lat', String(coordinates.latitude))
          .set('lon', String(coordinates.longitude))
          .set('units', 'imperial')
          .set('appid', '3d46ecbf6a9962da65be8bfab378bd36')
      }),
      switchMap(params => this.client.get<IOpenWeather>(this.url, { params })),
      pluck('list'),
      mergeMap(list => of(...list)),
      filter((obj, index) => index % 8 === 0),
      map(weather => {
        return {
          dt: weather.dt_txt,
          tmp: weather.main.temp
        }
      }),
      toArray()
    );
  }
  getCurrentLocation(): Observable<Coordinates> {
    return new Observable<Coordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        }, (err) => {
          observer.error(err);
      })
    });
  }
}
