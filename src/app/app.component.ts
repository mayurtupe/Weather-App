import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})

export class AppComponent {
  title = 'weather-app';
  weatherData: any;
  temperature!: any;
  unit: boolean = false;
  description: any;
  F: any;
  C: any;


  constructor(private weatherService: WeatherService,
    private http: HttpClient) { }

  getData(city: any) {
    this.weatherService.getWeatherData(city).subscribe(data => {
      this.weatherData = data
      console.log(this.weatherData);

      // this.temperature = Math.round(this.weatherData.main.temp - 273.15);
      this.temperature = this.weatherData.main.temp
      this.description - this.weatherData.weather[ 0 ].description;
    });
  }
  toggleUnit(): void {
    // this.unit = this.unit === 'C' ? 'F' : 'C';
    // this.temperature = this.unit === 'C' ?
    //   Math.round((this.temperature - 32) * (5 / 9)) : Math.round((this.temperature * 9 / 5) + 32);
    const temperature = Number();
    if (this.temperature === 'C') {
      this.F = ((temperature * 9) / 5 + 32).toFixed(1);
    } else {
      this.C = (((temperature - 32) * 5) / 9).toFixed(1);
    }
    this.unit = !this.unit
    this.unit ? this.temperature = Math.round((this.temperature * 9 / 5) + 32) : this.temperature = Math.round((this.temperature - 32) * (5 / 9));
  }
  // f c
  // const temp = Number(val);
  //   if (type === "c") {
  //     this.f = ((temp * 9) / 5 + 32).toFixed(1);
  //   } else {
  //     this.c = (((temp - 32) * 5) / 9).toFixed(1);
  //   }
}


