// src/services/finnhub.service.ts
import axios from 'axios';
import * as config from '../config/config';
import {
    FinnhubSearchResultItem,
    StockSearchResult,
    FinnhubProfile,
    FinnhubQuote,
    StockDetailsResponse,
} from '../interfaces/finnhub.interface';

const finnhubApiKey = config.finnhubApiKey;
const finnhubBaseUrl = 'https://finnhub.io/api/v1';

export const searchStocks = async (query: string): Promise<StockSearchResult[]> => {
    try {
        const response = await axios.get<{ result: FinnhubSearchResultItem[] }>(`${finnhubBaseUrl}/search`, {
            params: { q: query, exchange: "US", token: finnhubApiKey },
        });
        console.log('Finnhub Search Response:', response.data);

        return response.data.result
            .filter((item) => item.type === "Common Stock" && !item.symbol.includes("."))
            .map((item) => ({
                description: item.description,
                symbol: item.symbol,
            }));
    } catch (error: any) {
        console.error('Error fetching from Finnhub search:', error.message);
        throw error; // Re-throw the error for the controller to handle
    }
};

export const getStockDetails = async (symbol: string): Promise<StockDetailsResponse> => {
    try {
        const [profileResponse, quoteResponse, peersResponse] = await Promise.all([
            axios.get<FinnhubProfile>(`${finnhubBaseUrl}/stock/profile2`, { params: { symbol, token: finnhubApiKey } }),
            axios.get<FinnhubQuote>(`${finnhubBaseUrl}/quote`, { params: { symbol, token: finnhubApiKey } }),
            axios.get<string[]>(`${finnhubBaseUrl}/stock/peers`, { params: { symbol, token: finnhubApiKey } }),
        ]);

        return {
            symbol: symbol,
            name: profileResponse.data.name,
            exchange: profileResponse.data.exchange,
            logo: profileResponse.data.logo,
            price: quoteResponse.data.c,
            change: quoteResponse.data.d || 0,
            changePercent: quoteResponse.data.dp || 0,
            timestamp: new Date(quoteResponse.data.t * 1000).toLocaleString(),
            highPrice: quoteResponse.data.h,
            lowPrice: quoteResponse.data.l,
            openPrice: quoteResponse.data.o,
            prevClose: quoteResponse.data.pc,
            ipoDate: profileResponse.data.ipo,
            industry: profileResponse.data.finnhubIndustry,
            website: profileResponse.data.weburl,
            peers: peersResponse.data,
        };
    } catch (error: any) {
        console.error('Error fetching stock details from Finnhub:', error.message);
        throw error;
    }
};