import { DataTypes, Sequelize } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';

/* eslint @typescript-eslint/no-unused-vars: "off" */
const BlogsModel = (sequelize: Sequelize, _Sequelize: any) => {
    const Blog = sequelize.define(
        'Blogs',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING,
               
            },
            phoneNumber: {
                type: DataTypes.STRING,
              
            },
            password: {
                type: DataTypes.STRING,
            },
            RoleId: {
                type: DataTypes.INTEGER,
              
            },
           
        }
    );
    return Blog;
};

export default BlogsModel;
