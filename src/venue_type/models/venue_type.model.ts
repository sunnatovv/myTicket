import { Column, DataType, Model } from "sequelize-typescript";

interface IVenueTypeAttr {
    name:string
}

export class VenueType extends Model<VenueType, IVenueTypeAttr> {
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
}
