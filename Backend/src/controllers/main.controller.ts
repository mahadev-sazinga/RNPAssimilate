

import { NextFunction, Request, Response } from 'express';
import { getItStartupBanners } from '../services/main.service';
import { createUser } from '../services/user.service';

export const getItStartupBanner = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email, password, roleId } = req.body;
    try {
        const user = await getItStartupBanners();
        res.status(200).json(user);
    } catch (ex) {
        next(ex);
    }
};
