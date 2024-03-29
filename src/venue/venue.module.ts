import { Module } from "@nestjs/common";
import { VenueService } from "./venue.service";
import { VenueController } from "./venue.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Venue } from "./models/venue.model";
import { FileModule } from "../file/file.module";

@Module({
  imports: [SequelizeModule.forFeature([Venue]),FileModule],
  controllers: [VenueController],
  providers: [VenueService],
})
export class VenueModule {}
