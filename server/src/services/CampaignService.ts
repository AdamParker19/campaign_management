import CampaignDao from '../daos/campaignDao';
import {Campaign} from "../interfaces/CampaignModel";

export default class CampaignService {
    private campaignDao: CampaignDao;

    constructor() {
        this.campaignDao = new CampaignDao();
    }

    createCampaign = (campaign: Partial<Campaign>) => {
        return this.campaignDao.createCampaign(campaign);
    };

    getCampaignById = (id: string) => {
        return this.campaignDao.findCampaignById(id);
    };

    updateCampaign = (id: string, campaign: Partial<Campaign>) => {
        return this.campaignDao.updateCampaign(id, campaign);
    };

    deleteCampaign = (id: string) => {
        return this.campaignDao.deleteCampaign(id);
    };

    getAllCampaigns = () => {
        return this.campaignDao.fetchAllCampaigns();
    };
}

