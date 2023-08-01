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

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCities();
  }
  
  getCities() {
    this.api.getCities().subscribe((res) => {
      this.cities = res;
    })
  }

  search() {
    if(this.cityName == '') {
      this.ngOnInit();
    } else this.cities = this.cities.filter(res => {
      return res.cityName.toLocaleLowerCase().match(this.cityName.toLocaleLowerCase());
    })
  }
}
