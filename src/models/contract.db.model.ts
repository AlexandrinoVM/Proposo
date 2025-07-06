import {Table,Column,Model,DataType, AllowNull, AutoIncrement, PrimaryKey, CreatedAt, UpdatedAt} from 'sequelize-typescript'

@Table({tableName:"Contracts",timestamps:true})
export class Contracts extends Model<Contracts>{
    
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    client_name!: string;

    @Column({
        type:DataType.BLOB('long'),
        allowNull:false
    })
    pdf_file!: Buffer;

    @Column({ type: DataType.DATE })
    created_at!: Date;

    @Column({ type: DataType.DATE })
    updated_at!: Date;
}