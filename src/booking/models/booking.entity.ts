import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IBookinngCreationAttr {
  cartId: number;
  createdAt: string;
  finished: string;
  paymentMethodId: number;
  deliveryMethodId: number;
  discountCouponId: number;
  statusId: number;
}
@Table({ tableName: "booking" })
export class Booking extends Model<Booking, IBookinngCreationAttr> {
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
  cartId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  createdAt: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  finished: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  paymentMethodId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  deliveryMethodId: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  discountCouponId: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  statusId: number;
}
