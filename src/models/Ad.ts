import { Table, Model, Column, PrimaryKey, AutoIncrement, DataType } from "sequelize-typescript";
import { seq } from '../daos/seqDao';

@Table({tableName:'ad'})
export class Ad extends Model<Ad> {
    
    @PrimaryKey
    @AutoIncrement
    @Column
    ad_id: number;
    
    @Column
    placement_id:number;
    
    @Column
    display_num:number;
    
    @Column
    click_num:number;
    
    @Column
    income:number;
    
    @Column
    date: Date;
}

seq.addModels([Ad]);