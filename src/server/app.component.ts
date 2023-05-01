import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weather: any;

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http.get<any>('assets/server.json').subscribe(data => {
      this.weather = data;
    });
  }
}
