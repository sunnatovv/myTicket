import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IVanueCreationAttr {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  venueTypeId: number;
  schema: string;
  regionId: number;
  districtId: number;
}
@Table({ tableName: "venue" })
export class Venue extends Model<Venue, IVanueCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
  })
  name: string;
  @Column({
    type: DataType.STRING,
  })
  address: string;
  @Column({
    type: DataType.STRING,
  })
  location: string;
  @Column({
    type: DataType.STRING,
  })
  site: string;
  @Column({
    type: DataType.STRING,
  })
  phone: string;
  @Column({
    type: DataType.STRING,
  })
  schema: string;
}
