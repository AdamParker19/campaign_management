import {Document} from "mongoose";
import {CampaignTypes} from "../enums/CampaignTypes";

export interface Campaign extends Document {
    campaignType: CampaignTypes;
    startDate: Date;
    endDate: Date;
    schedule: { weekdays: String; startTime: String; endTime: String }[];
}
