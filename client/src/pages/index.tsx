import React, { useEffect, useState } from 'react';
import CampaignList from '../components/CampaignList';
import { FetchCampaigns } from '../lib/api';
import { Campaign } from '../types/Campaign';
const HomePage: React.FC = () => {
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);

    useEffect(() => {
        const getCampaigns = async () => {
            const data = await FetchCampaigns();
            setCampaigns(data);
        };
        getCampaigns();
    }, []);

    return <CampaignList campaigns={campaigns} />;
};

export default HomePage;
