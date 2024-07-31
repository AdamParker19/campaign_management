import { Request, Response } from 'express';
import CampaignService from "../services/campaignService";

export default class CampaignController {
    private campaignService : CampaignService;
    constructor() {
        this.campaignService = new CampaignService();
    }

    createCampaign = async (req: Request, res: Response) => {
        try {
            const campaign = await this.campaignService.createCampaign(req.body);
            res.status(201).json(campaign);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    getCampaignById = async (req: Request, res: Response) => {
        try {
            const campaign = await this.campaignService.getCampaignById(req.params.id);
            if (!campaign) return res.status(404).json({ message: 'Campaign not found' });
            res.json(campaign);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    updateCampaign = async (req: Request, res: Response) => {
        try {
            const campaign = await this.campaignService.updateCampaign(req.params.id, req.body);
            if (!campaign) return res.status(404).json({ message: 'Campaign not found' });
            res.json(campaign);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    deleteCampaign = async (req: Request, res: Response) => {
        try {
            const campaign = await this.campaignService.deleteCampaign(req.params.id);
            if (!campaign) return res.status(404).json({ message: 'Campaign not found' });
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    getAllCampaigns = async (req: Request, res: Response) => {
        try {
            const campaigns = await this.campaignService.getAllCampaigns();
            res.json(campaigns);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

}
