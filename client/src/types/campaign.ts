export enum CampaignType {
    CostPerOrder = 'Cost per Order',
    CostPerClick = 'Cost per Click',
    BuyOneGetOne = 'Buy One Get One',
}

export enum WeekDays {
    MONDAY = "Monday",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY",
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY"

}
export interface Campaign {
    _id: string;
    campaignType: CampaignType;
    startDate: String;
    endDate: String;
    schedule: { weekDay: string; startTime: string; endTime: string }[];
}
