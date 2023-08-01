import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class City {
  @Prop()
  uuid: string;

  @Prop()
  cityName: string;

  @Prop()
  count: number;
}

export const CitySchema = SchemaFactory.createForClass(City);
