import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { City } from '../models/city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {
  cities : City[] = [];
  cityName : any;
  p : number = 1;
  error: string = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.api.getCities().subscribe(
      (res) => {
        this.cities = res;
        this.error = '';
      },
      (error) => {
        this.error = 'Unable to fetch cities. Please try again later.';
      }
    );
  }

  search() {
    this.error = '';
    if (this.cityName === '') {
      this.getCities();
    } else {
      this.cities = this.cities.filter((res) => {
        return res.cityName.toLowerCase().includes(this.cityName.toLowerCase());
      });

      if (this.cities.length === 0) {
        this.error = 'No matching cities found.';
      }
    }
  }
}
