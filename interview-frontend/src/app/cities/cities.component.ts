import { Component, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { City } from '../models/city';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnDestroy {
  cities: City[] = [];
  cityName: string = '';
  p: number = 1;
  error: string = '';
  private citiesSubscription: Subscription | undefined;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.citiesSubscription = this.api.getCities().subscribe(
      (res) => {
        this.cities = res;
        this.error = '';
      },
      (error) => {
        this.error = "Unable to fetch cities. Sorry it's not you, it's us! Please try again later.";
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

  wiki(cityName: string) {
    window.open(`https://en.wikipedia.org/wiki/${cityName}`, '_blank');
  }

  ngOnDestroy() {
    if (this.citiesSubscription) {
      this.citiesSubscription.unsubscribe();
    }
  }
}