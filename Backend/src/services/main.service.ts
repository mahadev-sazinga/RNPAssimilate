import db from '../models';
const BANNER: any = db.it_startup_bannersModel;

export const getItStartupBanners = async () => await BANNER.findAll();
