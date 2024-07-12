// src/api.js
import axios from 'axios';

const API_URL = 'https://boilerplatefind.vercel.app/api';

export const getBoilerplates = async () => {
    try {
        const response = await axios.get(`${API_URL}/boilerplates`);
        return response.data;
    } catch (error) {
        console.error('Error fetching boilerplates:', error);
        throw error;
    }
};

export const getHotBoilerplates = async (days) => {
    try {
        const response = await axios.get(`${API_URL}/boilerplates/hot`, { params: { days } });
        return response.data;
    } catch (error) {
        console.error('Error fetching hot boilerplates:', error);
        throw error;
    }
};

export const addVote = async (boilerplateId, value) => {
    try {
        const response = await axios.post(`${API_URL}/votes`, { boilerplateId, value });
        return response.data;
    } catch (error) {
        console.error('Error adding vote:', error);
        throw error;
    }
};
