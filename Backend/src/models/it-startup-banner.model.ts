import { DataTypes, Sequelize } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';

/* eslint @typescript-eslint/no-unused-vars: "off" */
const it_startup_bannersModel = (sequelize: Sequelize, _Sequelize: any) => {
    const it_startup_banners = sequelize.define(
        'it_startup_banners',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: true,
            },
            short_description: {
                type: DataTypes.TEXT
            },
            password: {
                type: DataTypes.STRING,
            },
            btn_text: {
                type: DataTypes.STRING,
            },
            btn_link: {
                type: DataTypes.STRING,
            },
            createdOn: {
                defaultValue: Sequelize.fn('now'),
                type: DataTypes.DATE
              },
              updatedOn: {
                defaultValue: Sequelize.fn('now'),
                type: DataTypes.DATE
              },
              createdBy: {
                type: DataTypes.STRING
              },
              updatedBy: {
                type: DataTypes.STRING
              },
            
        }
       
    );
    return it_startup_banners;
};

export default it_startup_bannersModel;
