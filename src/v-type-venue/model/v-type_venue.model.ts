import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Venue } from "src/venue/models/venue.model";
import { VenueType } from "src/venue_type/models/venue_type.model";

interface VTypeVenueAttributes {
  venueTypeId: number;
  venueId: number;
}

@Table({ tableName: "vType_venue", createdAt: false, updatedAt: false })
export class VTypeVenue extends Model<VTypeVenue, VTypeVenueAttributes> {
  @ApiProperty({ example: 1, description: "The ID of the venue type" })
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueTypeId: number;

  @ApiProperty({ example: 1, description: "The ID of the venue" })
  @ForeignKey(() => VenueType)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;
}
