import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface productcategoryAttributes {
  id?: number;
  name?: string;
  description?: string;
  createdat?: Date;
  updateat?: Date;
}

@Table({ tableName: 'productcategory', schema: 'public', timestamps: false })
export class productcategory
  extends Model<productcategoryAttributes, productcategoryAttributes>
  implements productcategoryAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('productcategory_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING(200) })
  description?: string;

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
