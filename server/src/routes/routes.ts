import { Router } from 'express';
import CampaignController from '../controllers/CampaignController';

const router = Router();
const campaignController : CampaignController = new CampaignController();

router.post('/create', campaignController.createCampaign);
router.get('/', campaignController.getAllCampaigns);
router.get('/:id', campaignController.getCampaignById);
router.put('/update/:id', campaignController.updateCampaign);
router.delete('/delete/:id', campaignController.deleteCampaign);

export default router;
