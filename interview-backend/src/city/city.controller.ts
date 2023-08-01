import { Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';
import { City } from './schemas/city.schema';

@Controller('cities')
export class CityController {
  constructor(private cityService: CityService) {}

  @Get()
  async getAllCities(): Promise<City[]> {
    return this.cityService.findAll();
  }
}
