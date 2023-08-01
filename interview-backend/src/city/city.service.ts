import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { City } from './schemas/city.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class CityService {
  constructor(
    @InjectModel(City.name)
    private cityModel: mongoose.Model<City>,
  ) {}

  async findAll(): Promise<City[]> {
    const cities = await this.cityModel.find();
    return cities;
  }
}
