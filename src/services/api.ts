import axios from "axios";
import { UnsplashImages } from "../types/MainTypes";

const BASE_URL = 'https://api.unsplash.com/';
const AccessKey = 'saFSZHvSAbFm57eP0Uq108X1G5NSuUF1coJiugEjr8M';

// type UnsplashImages = {
//     id: string | number;
//     urls: {
//         small: string;
//         regular: string;
//     };
//     alt_description: string | undefined;
// };

type FetchHitsResponse = {
    total: number;
    total_pages: number;
    results: UnsplashImages[];
}


export const fetchHits = async (query: string, page: number, signal?: AbortSignal): Promise<FetchHitsResponse> => {
    const response = await axios.get<FetchHitsResponse>(`${BASE_URL}search/photos?client_id=${AccessKey}&query=${query}`, {
        params: {
            page: page,
            per_page: 20,
            orientation: 'landscape',
        },
        signal,
    });
    return response.data;
};