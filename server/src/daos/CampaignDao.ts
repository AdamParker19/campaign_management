import CampaignModel from '../models/Campaign';
import Campaign from "../models/Campaign";

export default class CampaignDao {
    constructor() {
    }

    createCampaign = (campaign: Partial<Campaign>) => {
        return CampaignModel.create(campaign);
    };

    findCampaignById = (id: string) => {
        return CampaignModel.findById(id).exec();
    };

    updateCampaign = (id: string, campaign: Partial<Campaign>) => {
        return CampaignModel.findByIdAndUpdate(id, campaign, { new: true }).exec();
    };

    fetchAllCampaigns = () => {
        return CampaignModel.find().exec();
    };

    deleteCampaign = (id: string) => {
        return CampaignModel.findByIdAndDelete(id).exec();
    };

}




