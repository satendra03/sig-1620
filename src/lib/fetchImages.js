import axios from 'axios';

const apiKey = import.meta.env.VITE_API; // Adjust this as needed

export const fetchImages = async ({ query, perPage = 10, orientation = 'landscape' }) => {
    try {
        const response = await axios({
            method: 'get',
            url: `https://api.pexels.com/v1/search`,
            headers: {
                Authorization: `${apiKey}`,
            },
            params: {
                query,
                per_page: perPage,
                orientation
            }
        });

        return response.data.photos;
    } catch (err) {
        console.error("Error from fetching images:", err.message);
        throw err;
    }
};
