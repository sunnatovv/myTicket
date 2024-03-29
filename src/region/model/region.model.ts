import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Customer } from "src/customer/model/customer.model";
import { CustomerAddress } from "src/customer_address/model/customer_address.model";
import { ApiProperty } from "@nestjs/swagger";

interface RegionCreationAttr {
  name: string;
}

@Table({ tableName: "region" })
export class Region extends Model<Region, RegionCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "The unique identifier for the region",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: "North", description: "The name of the region" })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({
    type: () => [Customer],
    description: "The customers associated with this region",
  })
  @BelongsToMany(() => Customer, () => CustomerAddress)
  customer: Customer[];
}
