import {Table,Column,Model,DataType, AllowNull, AutoIncrement, PrimaryKey, CreatedAt, UpdatedAt} from 'sequelize-typescript'

@Table({tableName:"Templates",timestamps:true})
export class Templates extends Model<Templates>{
    
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    name!: string;

    @Column({
        type:DataType.TEXT,
        allowNull:false
    })
    content!: string;

    @Column({ type: DataType.DATE })
    created_at!: Date;

    @Column({ type: DataType.DATE })
    updated_at!: Date;
}