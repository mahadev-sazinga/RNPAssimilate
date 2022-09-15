import { WhereOptions } from 'sequelize/types';
import db from '../models';
import { getPasswordHash } from '../shared/utils/auth-utils';

const BLOG: any = db.Blogs;

// export const createUser = async (
//     email: string,
//     password: string,
//     roleId: number
// ) => {
//     const hashedPassword = await getPasswordHash(password);
//     return await User.create({
//         email,
//         password: hashedPassword,
//         RoleId: roleId,
//     });
// };

export const findAllBlog = async () => await BLOG.findAll();


// const db = require("../models");

