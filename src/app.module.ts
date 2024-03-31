import { Module } from "@nestjs/common";

import { VenueModule } from "./venue/venue.module";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Venue } from "./venue/models/venue.model";
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { VenuePhoto } from "./venue_photo/models/venue_photo.model";
import { VenueTypeModule } from './venue_type/venue_type.module';
import { VenueType } from "./venue_type/models/venue_type.model";
import { SeatModule } from './seat/seat.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { HumanCategoryModule } from './human_category/human_category.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [Venue,VenuePhoto,VenueType],
      autoLoadModels: true,
      sync: { alter: true },
      logging: true,
    }),
    VenuePhotoModule,
    VenueTypeModule,
    SeatModule,
    SeatTypeModule,
    HumanCategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
