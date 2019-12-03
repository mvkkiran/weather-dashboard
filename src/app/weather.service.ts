import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeather(location){
    return this.http.get(
      //dont make a HTTPS call here, as the weather stack api will not support it under free subscription.
        'http://api.weatherstack.com/current?access_key=ccda708c4dac04294e8e9f1b5283891c&query=' + location
        
    );
  }
}
