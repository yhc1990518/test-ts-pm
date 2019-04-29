import {Sequelize} from 'sequelize-typescript';
import {config} from '../../config';


export const seq = new Sequelize('mysql://[user_name]:[password]@[ip:port]/[db_name]', {
    dialect:'mysql',
    define: {
        timestamps: false, //开启时间戳
        paranoid: false, //开启逻辑删除
        underscored: true, //下划线
        charset: 'utf8', //字符集
        freezeTableName: true
    },
    pool: {
        max:10,
        min:1,
        acquire:30000,
        idle:10000
    }
});