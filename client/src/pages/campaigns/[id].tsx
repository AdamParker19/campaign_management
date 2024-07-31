import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CampaignForm from '../../components/CampaignForm';
import { fetchCampaignById, updateCampaign } from '../../lib/api';
import { Campaign } from '../../types/Campaign';
import styles from '@/css/CampaignForm.module.css';

const EditCampaignPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [campaign, setCampaign] = useState<Campaign | null>(null);

    useEffect(() => {
        if (id) {
            const getCampaign = async () => {
                const data = await fetchCampaignById(id as string);
                setCampaign(data);
            };
            getCampaign();
        }
    }, [id]);

    const onSubmit = async (data: any) => {
        await updateCampaign(id as string, data);
        router.push('/');
    };

    if (!campaign) return <div>Loading...</div>;

    return (
        <div>
            <h1 className={styles.heading}>Edit Campaign</h1>
            <CampaignForm onSubmit={onSubmit} defaultValues={campaign} />
        </div>
    );
};

export default EditCampaignPage;
