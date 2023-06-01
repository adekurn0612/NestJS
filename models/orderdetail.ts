import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface orderdetailAttributes {
  id?: number;
  orderid?: number;
  productid?: number;
  quantity?: number;
  createdat?: Date;
  updateat?: Date;
}

@Table({ tableName: 'orderdetail', schema: 'public', timestamps: false })
export class orderdetail
  extends Model<orderdetailAttributes, orderdetailAttributes>
  implements orderdetailAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('orderdetail_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  orderid?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  productid?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  quantity?: number;

  @Column({
    allowNull: true,
    type: DataType.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  createdat?: Date;

  @Column({
    allowNull: true,
    type: DataType.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  updateat?: Date;
}
