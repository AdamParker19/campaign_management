import React from 'react';
import { useRouter } from 'next/router';
import CampaignForm from '../../components/CampaignForm';
import { createCampaign } from '../../lib/api';
import styles from '@/css/CampaignForm.module.css';

const CreateCampaignPage: React.FC = () => {
    const router = useRouter();

    const onSubmit = async (data: any) => {
        await createCampaign(data);
        router.push('/');
    };

    return (
        <div>
            <h1 className={styles.heading}>Create Campaign</h1>
            <CampaignForm onSubmit={onSubmit} />
        </div>
    );
};

export default CreateCampaignPage;
