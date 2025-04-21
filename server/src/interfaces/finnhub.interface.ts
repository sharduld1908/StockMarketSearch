// src/interfaces/finnhub.interface.ts
export interface FinnhubSearchResultItem {
    type: string;
    symbol: string;
    description: string;
}

export interface StockSearchResult {
    description: string;
    symbol: string;
}

export interface FinnhubProfile {
    name: string;
    exchange: string;
    logo: string;
    ipo: string;
    finnhubIndustry: string;
    weburl: string;
}

export interface FinnhubQuote {
    c: number;
    d?: number;
    dp?: number;
    t: number;
    h: number;
    l: number;
    o: number;
    pc: number;
}

export interface StockDetailsResponse {
    symbol: string;
    name?: string;
    exchange?: string;
    logo?: string;
    price?: number;
    change?: number;
    changePercent?: number;
    timestamp?: string;
    highPrice?: number;
    lowPrice?: number;
    openPrice?: number;
    prevClose?: number;
    ipoDate?: string;
    industry?: string;
    website?: string;
    peers?: string[];
}