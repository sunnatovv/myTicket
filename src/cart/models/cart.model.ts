import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICartCreationAttr {
  ticketId: number;
  customerId: number;
  createdAt: string;
  finishedAt: string;
  statusId: string;
}
@Table({ tableName: "cart" })
export class Cart extends Model<Cart, ICartCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ticketId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customerId: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  createdAt: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  updatedAt: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  statusid: number;
}
