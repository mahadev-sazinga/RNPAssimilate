import express from 'express';
import { getItStartupBanner } from '../controllers/main.controller';
import { EMPTY_ROUTE } from '../shared/constants/url';

const mainRouter = express.Router();

mainRouter.post(EMPTY_ROUTE, getItStartupBanner);

export default mainRouter;
