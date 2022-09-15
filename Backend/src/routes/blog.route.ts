import express from 'express';
import { getItStartupBanner } from '../controllers/main.controller';
import { EMPTY_ROUTE } from '../shared/constants/url';

const blogRouter = express.Router();

blogRouter.get(EMPTY_ROUTE, getItStartupBanner);

export default blogRouter;
