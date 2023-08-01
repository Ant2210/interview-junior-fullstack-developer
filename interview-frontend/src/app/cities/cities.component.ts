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

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCities();
  }
  
  getCities() {
    this.api.getCities().subscribe((res) => {
      this.cities = res;
      console.log(res);
    })
  }
}
