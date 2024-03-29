import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Seat } from "src/seat/model/seat.model";
import { Venue } from "src/venue/models/venue.model";
import { ApiProperty } from "@nestjs/swagger";

interface SeatTypeCreationAttr {
  name: string;
}

@Table({ tableName: "seat_type" })
export class SeatType extends Model<SeatType, SeatTypeCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "The unique identifier for the seat type",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: "Standard",
    description: "The name of the seat type",
  })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    type: () => [Venue],
    description: "The venues associated with this seat type",
  })
  @BelongsToMany(() => Venue, () => Seat)
  Venue: Venue[];
}
