import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { CampaignType } from '../types/Campaign';
import {deleteCampaign, FetchCampaigns} from "@/lib/api";
import styles from '@/css/CampaignList.module.css';

interface Campaign {
    _id: string;
    campaignType: CampaignType;
    startDate: string;
    endDate: string;
    schedule: {
        weekDay: string;
        startTime: string;
        endTime: string;
    }[];
}

const CampaignList: React.FC = () => {
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await FetchCampaigns()
                setCampaigns(response);
            } catch (error) {
                console.error('Failed to fetch campaigns', error);
            }
        };

        fetchCampaigns();
    }, []);

    const handleAddCampaign = () => {
        router.push('/campaigns/create');
    };

    const handleEdit = (id: string) => {
        router.push(`/campaigns/${id}`);
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteCampaign(id);
            setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
        } catch (error) {
            console.error('Failed to delete campaign', error);
        }
    };

    return (
        <div className={styles.cardContainer}>
            <button onClick={handleAddCampaign} className={styles.addButton}>
                Add Campaign
            </button>
            {campaigns.map((campaign) => (
                <div key={campaign._id} className={styles.card}>
                    <div className={styles.cardHeader}>
                        {campaign.campaignType}
                    </div>
                    <div className={styles.cardBody}>
                        <div>
                            <strong>Start Date:</strong> {new Date(campaign.startDate).toLocaleDateString()}
                        </div>
                        <div>
                            <strong>End Date:</strong> {new Date(campaign.endDate).toLocaleDateString()}
                        </div>
                        <div>
                            <strong>Next Scheduled Activation:</strong>
                            <ul>
                                {campaign.schedule.map((sch, index) => (
                                    <li key={index}>
                                        {sch.weekDay}: {sch.startTime} - {sch.endTime}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.cardFooter}>
                        <button onClick={() => handleEdit(campaign._id)} className={`${styles.button} ${styles.edit}`}>
                            Edit
                        </button>
                        <button onClick={() => handleDelete(campaign._id)}
                                className={`${styles.button} ${styles.delete}`}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CampaignList;
