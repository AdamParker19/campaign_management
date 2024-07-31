import axios from 'axios';
import { Campaign } from '../types/Campaign';
const dotenv = require('dotenv');

dotenv.config({path: '../.env.local'});
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const FetchCampaigns = async (): Promise<Campaign[]> => {
    try {
        console.log(process.env.BACKEND_URL)
        const response = await axios.get(API_URL);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const createCampaign = async (campaign: Partial<Campaign>) => {
    const response = await axios.post(`${API_URL}/create`, campaign);
    return response.data;
};

export const fetchCampaignById = async (id: string): Promise<Campaign> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const updateCampaign = async (id: string, campaign: Partial<Campaign>) => {
    const response = await axios.put(`${API_URL}/update/${id}`, campaign);
    return response.data;
};

export const deleteCampaign = async (id: string) => {
    const response = await axios.delete(`${API_URL}/delete/${id}`);
    return response.data;
};