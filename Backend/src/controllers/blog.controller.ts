import { NextFunction, Request, Response } from 'express';
import { findAllBlog } from '../services/blogs.service';
import { createUser } from '../services/user.service';

export const findAllBlogs = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email, password, roleId } = req.body;
    try {
        const user = await findAllBlog();
        res.status(200).json(user);
    } catch (ex) {
        next(ex);
    }
};
