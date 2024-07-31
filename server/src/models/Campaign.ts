import mongoose, { Schema} from 'mongoose';
import {CampaignTypes} from "../enums/CampaignTypes";
import {Campaign} from "../interfaces/CampaignModel";

const CampaignSchema: Schema = new Schema<Campaign>({
    campaignType: { type: String, enum: Object.values(CampaignTypes), required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    schedule: [
        {
            weekDay: { type: String, required: true },
            startTime: { type: String, required: true },
            endTime: { type: String, required: true },
        }
    ]
});

const Campaign = mongoose.model('Campaign', CampaignSchema);
export default Campaign
